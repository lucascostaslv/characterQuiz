export default class Character { 
    
    constructor(name, description, image) { 
        this.name = name; 
        this.description = description; 
        this.image = image; 
        this.score = 0; 
    } 
    
    addScore(points){ this.score += points; } 

}