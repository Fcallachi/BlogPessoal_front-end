import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
  }

  getAllPostagens() {
    return this.http.get('http://localhost:8081/postagens', this.token)
  }
  
  getByIdPostagem(id:number){
    return this.http.get(`http://localhost:8081/postagens/${id}`,this.token)
  }
  postPostagem(postagem:Postagem){
    return this.http.post('http://localhost:8081/postagens', postagem, this.token)
  }
  putPostagem(postagem:Postagem){
    return this.http.put('http://localhost:8081/postagens', postagem, this.token)
  }
  deletePostagem(id:number){
    return this.http.get(`http://localhost:8081/postagens/${id}`,this.token)
  }
  getByTituloPostagem(titulo: string) {
    return this.http.get(`http://localhost:8081/postagens/titulo/${titulo}`, this.token)
  }

}