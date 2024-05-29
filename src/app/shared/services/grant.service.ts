import { Injectable } from '@angular/core';
import { Grant } from '@shared/models/grant';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GrantService {

  getGrants(): Observable<Grant[]> {
    return of([{
      "id": "3decf72d-3e8e-4930-a005-e8d8357f1b6c",
      "title": "Programmer I",
      "image": "http://dummyimage.com/203x100.png/ff4444/ffffff",
      "requirements": "Nondisp fx of ant column of unsp acetab, 7thK",
      "dateEnd": "8/5/2023"
    }, {
      "id": "99403d26-adb3-4a1b-bf13-8ab2b596aa37",
      "title": "Statistician I",
      "image": "http://dummyimage.com/159x100.png/cc0000/ffffff",
      "requirements": "Displaced avulsion fx right ilium, subs for fx w routn heal",
      "dateEnd": "4/19/2024"
    }, {
      "id": "233b9312-fa32-4444-af62-946d80d21506",
      "title": "Senior Editor",
      "image": "http://dummyimage.com/239x100.png/5fa2dd/ffffff",
      "requirements": "Oth fx lower end of left tibia, subs for clos fx w nonunion",
      "dateEnd": "1/20/2024"
    }, {
      "id": "363e21ea-4803-450f-a482-93534c7a3cff",
      "title": "Compensation Analyst",
      "image": "http://dummyimage.com/103x100.png/dddddd/000000",
      "requirements": "Failed moderate sedation during procedure, subs encntr",
      "dateEnd": "3/9/2024"
    }, {
      "id": "47c6a322-3eab-4a7f-be04-d38338e59d54",
      "title": "Systems Administrator II",
      "image": "http://dummyimage.com/223x100.png/cc0000/ffffff",
      "requirements": "Maternal care for transverse and oblique lie, fetus 1",
      "dateEnd": "7/22/2023"
    }, {
      "id": "84c0141f-4f94-4370-8e96-2dc63c96bd60",
      "title": "General Manager",
      "image": "http://dummyimage.com/250x100.png/dddddd/000000",
      "requirements": "Abnlt in fetal heart rate and rhythm comp labor and delivery",
      "dateEnd": "2/15/2024"
    }, {
      "id": "2a6a2046-2b99-409f-a9e1-707c02dc2113",
      "title": "Account Coordinator",
      "image": "http://dummyimage.com/247x100.png/5fa2dd/ffffff",
      "requirements": "Other secondary osteonecrosis, right foot",
      "dateEnd": "11/8/2023"
    }, {
      "id": "012bd483-0aa1-44dc-974e-715d46e2e095",
      "title": "Web Developer IV",
      "image": "http://dummyimage.com/235x100.png/cc0000/ffffff",
      "requirements": "Traum hemor r cereb w LOC >24 hr w ret consc lev, subs",
      "dateEnd": "10/12/2023"
    }, {
      "id": "69b343ca-23bd-433e-bafd-eb6c567314c3",
      "title": "Tax Accountant",
      "image": "http://dummyimage.com/159x100.png/cc0000/ffffff",
      "requirements": "Toxic effect of hydrogen cyanide, assault, sequela",
      "dateEnd": "6/21/2023"
    }, {
      "id": "9f70840c-ccb1-483d-a414-638270df01d5",
      "title": "Analog Circuit Design manager",
      "image": "http://dummyimage.com/178x100.png/5fa2dd/ffffff",
      "requirements": "Drug-induced chronic gout, left knee",
      "dateEnd": "10/8/2023"
    }])
  }

}
