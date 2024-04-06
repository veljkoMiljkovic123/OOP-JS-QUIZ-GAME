class Question{
    text;
    options;
    answer;
    points;
    category;

    constructor(text,options,answer,points,category){
        this.text=text;
        this.options=options;
        this.answer=answer;
        this.points=points;
        this.category=category;
    }
}

let questions = [
    new Question("Koji je glavni grad Srbije",["Novi Sad","Beograd","Nis","Brus"],"Beograd",5,"Opste znanje"),
    new Question("Koji je najveca reka Srbije",["Sava","Morava","Rasina","Dunav"],"Dunav",5,"Opste znanje"),
    new Question("Koji je najvisi vrh Srbije",["Pancicev vrh","Babin zub","Midzor","Rtanj"],"Midzor",5,"Opste znanje"),
    new Question("Koje je najvece jezero Srbije",["Palicko","Djerdapsko","Perucacko","Zlatarsko"],"Beograd",5,"Opste znanje"),  
    new Question("Koja znamenitost se nalazi na jugu i poznata je po cudesima?",["Golubac","Djavolja Varos","Sopocani","Studenica"],"Djavolja Varos",5,"Opste znanje"),  
    new Question("Koja dinastija je vladala tokom srednjeg veka ",["Nemanjici","Obrenovici","Karadjordjevici","Milosevici"],"Nemanjici",5,"Opste znanje"),  
]