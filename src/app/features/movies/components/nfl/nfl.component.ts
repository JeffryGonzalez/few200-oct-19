import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import * as parser from 'fast-xml-parser';
@Component({
  selector: 'app-nfl',
  templateUrl: './nfl.component.html',
  styleUrls: ['./nfl.component.css']
})
export class NflComponent implements OnInit {

  gameData: Game[];
  constructor(private client: HttpClient) { }

  ngOnInit() {

    this.client.get('http://www.nfl.com/ajax/scorestrip?season=2019&seasonType=REG&week=05', {
      responseType: 'text'
    })
      .pipe(
        tap(r => {

          this.gameData = parser.parse(r, {
            ignoreAttributes: false,
            parseAttributeValue: true,
            attributeNamePrefix: ''
          }).ss.gms.g;
        })
      ).subscribe();
  }

}

// Generated by https://quicktype.io

export interface Game {
  eid: number;
  gsis: number;
  d: string;
  t: string;
  q: string;
  k: string;
  h: string;
  hnn: string;
  hs: number;
  v: string;
  vnn: string;
  vs: number;
  p: string;
  rz: string;
  ga: string;
  gt: string;
}

