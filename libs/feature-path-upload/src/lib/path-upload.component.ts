import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { requiredFileType } from '@crancha/utils';
const COLORS = [
  'White',
  'Yellow',
  'Blue',
  'Red',
  'Green',
  'Black',
  'Brown',
  'Azure',
  'Ivory',
  'Teal',
  'Silver',
  'Purple',
  'Gray',
  'Orange',
  'Maroon',
  'Charcoal',
  'Aquamarine',
  'Coral',
  'Fuchsia',
  'Wheat',
  'Lime',
  'Crimson',
  'Khaki',
  'Magenta',
  'Olden',
  'Plum',
  'Olive',
  'Cyan'
];
import { Observable } from 'rxjs';
@Component({
  selector: 'crancha-path-upload',
  templateUrl: './path-upload.component.html',
  styleUrls: ['./path-upload.component.scss']
})
export class PathUploadComponent implements OnInit {
  items: Observable<any[]>;
  public pathFormGroup: FormGroup;
  public colors = COLORS;
  get pathNameValidation(): boolean {
    return (
      this.pathFormGroup.get('pathName').valid &&
      this.pathFormGroup.get('pathName').touched
    );
  }

  get fileValidation(): boolean {
    return (
      this.pathFormGroup.get('file').errors &&
      this.pathFormGroup.get('file').errors.requiredFileType
    );
  }

  constructor(
    private firestore: AngularFirestore,
    private storage: AngularFireStorage
  ) {
    this.items = firestore.collection('paths').valueChanges();
  }

  ngOnInit(): void {
    this.pathFormGroup = new FormGroup({
      pathName: new FormControl('', Validators.required),
      file: new FormControl('', [Validators.required]),
      color: new FormControl('', [Validators.required])
    });
  }

  async onSubmit() {
    const { file, pathName, color } = this.pathFormGroup.value;
    const id = this.firestore.createId();
    const filePath = 'paths/files/' + id;
    const ref = this.storage.ref(filePath);
    const metadata = {
      contentType: 'text/plain'
    };

    const task = await ref.put(file, metadata);

    const urlPath = await ref.getDownloadURL().toPromise();
    this.firestore.createId();
    this.firestore
      .collection('paths')
      .add({
        id: this.firestore.createId(),
        name: pathName,
        path: urlPath,
        color
      })
      .then(() => this.pathFormGroup.reset());
  }
}
