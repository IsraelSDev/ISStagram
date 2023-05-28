import { initializeApp } from '@firebase/app';
import { Component, OnInit } from '@angular/core';
import { getDatabase } from "firebase/database";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'ISStagram';

  constructor(

  ) { }

  ngOnInit(): void {

    const firebaseConfig = {
      apiKey: "AIzaSyCAJXMEt0Zm33SHQrEm_JwAHQsZfWneWj4",
      authDomain: "isstagram-883a0.firebaseapp.com",
      databaseURL: "https://isstagram-883a0-default-rtdb.firebaseio.com",
      projectId: "isstagram-883a0",
      storageBucket: "isstagram-883a0.appspot.com",
      messagingSenderId: "519263327955",
      appId: "1:519263327955:web:a247440da4d40fd805e626",
      measurementId: "G-20NZHE3XX9"
    };

    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app);
  }
}

