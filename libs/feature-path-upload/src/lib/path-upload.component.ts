import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'crancha-path-upload',
  templateUrl: './path-upload.component.html',
  styleUrls: ['./path-upload.component.scss']
})
export class PathUploadComponent implements OnInit {
  items: Observable<any[]>;
  private itemDoc: AngularFirestoreDocument<any>;

  constructor(
    private firestore: AngularFirestore,
    private storage: AngularFireStorage,
    db: AngularFireDatabase
  ) {
    this.items = firestore.collection('items').valueChanges();
  }

  ngOnInit(): void {}

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
}
