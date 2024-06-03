import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from '@environments/environment.development';
import { Grant, GrantV } from '@shared/models/grant';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GrantService extends HttpService {
  #apiUrl = environment.apiUrl;
  gansts: Grant[] = [{
    "id": "3decf72d-3e8e-4930-a005-e8d8357f1b6c",
    "title": "Programmer I",
    "image": "http://dummyimage.com/203x100.png/ff4444/ffffff",
    type: 'Postgrado',
    "requirements": "Nondisp fx of ant column of unsp acetab, 7thK",
    "dateEnd": "8/5/2023",
    "initialDate": "1/5/2023",
    educationLevel: 'Pregrado'
  }, {
    "id": "99403d26-adb3-4a1b-bf13-8ab2b596aa37",
    "title": "Statistician I",
    "image": "http://dummyimage.com/159x100.png/cc0000/ffffff",
    type: 'Postgrado',
    "requirements": "Displaced avulsion fx right ilium, subs for fx w routn heal",
    "dateEnd": "4/19/2024",
      "initialDate": "1/5/2023",
      educationLevel: 'Pregrado'
    }, {
      "id": "233b9312-fa32-4444-af62-946d80d21506",
      "title": "Senior Editor",
      "image": "http://dummyimage.com/239x100.png/5fa2dd/ffffff",
      "requirements": "Oth fx lower end of left tibia, subs for clos fx w nonunion",
      type: 'Pregrado',
      "dateEnd": "1/20/2024",
      initialDate: "1/5/2023",
      educationLevel: 'Pregrado'
    }, {
      "id": "363e21ea-4803-450f-a482-93534c7a3cff",
      "title": "Compensation Analyst",
      "image": "http://dummyimage.com/103x100.png/dddddd/000000",
      type: 'Pregrado',
      "requirements": "Failed moderate sedation during procedure, subs encntr",
      "dateEnd": "3/9/2024",
      initialDate: "1/5/2023",
      educationLevel: 'Pregrado'
    }, {
      "id": "47c6a322-3eab-4a7f-be04-d38338e59d54",
      "title": "Systems Administrator II",
      "image": "http://dummyimage.com/223x100.png/cc0000/ffffff",
      type: 'Pregrado',
      "requirements": "Maternal care for transverse and oblique lie, fetus 1",
      "dateEnd": "7/22/2023",
      "initialDate": "1/5/2023",
      educationLevel: 'Pregrado'
    }, {
      "id": "84c0141f-4f94-4370-8e96-2dc63c96bd60",
      "title": "General Manager",
      "image": "http://dummyimage.com/250x100.png/dddddd/000000",
      type: 'Pregrado',
      "requirements": "Abnlt in fetal heart rate and rhythm comp labor and delivery",
      "dateEnd": "2/15/2024",
      "initialDate": "1/5/2023",
      educationLevel: 'Pregrado'
    }, {
      "id": "2a6a2046-2b99-409f-a9e1-707c02dc2113",
      "title": "Account Coordinator",
      "image": "http://dummyimage.com/247x100.png/5fa2dd/ffffff",
      "requirements": "Other secondary osteonecrosis, right foot",
      "dateEnd": "11/8/2023",
      type: 'Pregrado',
      "initialDate": "1/5/2023",
      educationLevel: 'Pregrado'
    }, {
      "id": "012bd483-0aa1-44dc-974e-715d46e2e095",
      "title": "Web Developer IV",
      "image": "http://dummyimage.com/235x100.png/cc0000/ffffff",
      "requirements": "Traum hemor r cereb w LOC >24 hr w ret consc lev, subs",
      "dateEnd": "10/12/2023",
      type: 'Pregrado',
    "initialDate": "1/5/2023",
    educationLevel: 'Pregrado'
  }, {
    "id": "69b343ca-23bd-433e-bafd-eb6c567314c3",
    "title": "Tax Accountant",
    "image": "http://dummyimage.com/159x100.png/cc0000/ffffff",
    "requirements": "Toxic effect of hydrogen cyanide, assault, sequela",
    "dateEnd": "6/21/2023",
    type: 'Maestría',
    "initialDate": "1/5/2023",
    educationLevel: 'Pregrado'
  }, {
    "id": "9f70840c-ccb1-483d-a414-638270df01d5",
    "title": "Analog Circuit Design manager",
    "image": "http://dummyimage.com/178x100.png/5fa2dd/ffffff",
    "requirements": "Drug-induced chronic gout, left knee",
    "dateEnd": "10/8/2023",
    type: 'Maestría',
    "initialDate": "1/5/2023",
    educationLevel: 'Pregrado'
  }]

  getGrants(): Observable<Grant[]> {
    return of([...this.gansts])
  }

  getGrant(id: string): Observable<Grant | undefined> {
    const grant = this.gansts.find((grant) => grant.id === id)
    return of(grant);
  }

  getAll(): Observable<GrantV[]> {
    return this.doGet<GrantV[]>(`${this.#apiUrl}/grant`)
  }
  getOne(): Observable<GrantV> {
    return this.doGet<any>(`${this.#apiUrl}/grant`);
  }

  create(data: any): Observable<any> {
    return this.doPost<any>(`${this.#apiUrl}/grant`, data);
  }

  update(id: string, data: any): Observable<any> {
    return this.doPatch<any, any>(`${this.#apiUrl}/grant/${id}`, data);
  }

  delete(id: string): Observable<any> {
    return this.doDelete<string>(`${this.#apiUrl}/grant/${id}`);
  }

}
