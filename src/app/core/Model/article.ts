export class NewArticle{
    title?: string
    body?: string
    tagList?: TagList[]=[];
    description?: string
    
}

export class Article{
    public article?:NewArticle
}


export class TagList{

}
export class UserLogIn{
    public email:string="";
    public password:string="";
  }
  
  export class Users{
      public user!:UserLogIn;
  }
