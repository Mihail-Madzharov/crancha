import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { requiredFileType } from '@crancha/utils';

import { Observable } from 'rxjs';
@Component({
  selector: 'crancha-path-upload',
  templateUrl: './path-upload.component.html',
  styleUrls: ['./path-upload.component.scss']
})
export class PathUploadComponent implements OnInit {
  items: Observable<any[]>;
  public pathFormGroup: FormGroup;

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
      file: new FormControl('', [Validators.required, requiredFileType('jpg')])
    });
  }

  async onSubmit() {
    const { file, pathName } = this.pathFormGroup.value;
    const filePath = 'paths/files';
    const ref = this.storage.ref(filePath);
    const task = ref.put(file);

    const urlPath = await ref.getDownloadURL().toPromise();
    this.firestore.createId();
    this.firestore
      .collection('paths')
      .add({ id: this.firestore.createId(), name: pathName, path: urlPath });
  }
}
