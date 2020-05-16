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

  async uploadFile(event) {
    const file = event.target.files[0];
    const filePath = 'paths/files';
    const ref = this.storage.ref(filePath);
    const task = ref.put(file);

    const urlPath = await ref.getDownloadURL().toPromise();
    this.firestore
      .collection('items')
      .add({ name: 'Alexnadra', path: urlPath });
  }

  onSubmit() {
    console.log(this.pathFormGroup.value);
  }
}
