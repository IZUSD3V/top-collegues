export interface Collegue{
  pseudo: string;
  score: number;
  photoUrl: string;  
}

export interface CollegueWebApi{
  nom:string;
  prenom:string;
  pseudo: string;
  score: number;
  photo: string;  
}

export interface Vote{
  pseudo: string;
  avis: Avis;
}

export enum Avis {AIMER="AIMER", DETESTER="DETESTER"};


