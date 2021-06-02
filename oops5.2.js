// CLASS TOPICS: Inheritance

class Game{
    constructor()
    {
        this.ammo = 40;
    }
    shoot()
    {
        console.log(this.name + ': is shooting')
    }
}

class Player extends Game{
    constructor(name)
    {
        super();
        this.name = name;
    }
    test()
    {
        super.shoot();
    }
}

class Enemy extends Game{
 constructor(name)
 {
     super();
     this.name = name;
 }
}
''
player = new Player('prafful');
player.test()
