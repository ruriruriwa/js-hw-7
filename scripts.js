let Kettle = function(name, volume, electric, color) {
    this.name = name;
    this.volume = volume;
    this.electric = electric;
    this.color = color;

    this.get = function() {
        this.turning = prompt('Please turn on the kettle', 'on');
        this.turning2();
    };

    this.turning2 = function() {
        switch(this.turning) {
            case 'on':
                console.log('Thank you for turning the kettle on');
                this.ktl = prompt('Please choose a kettle: Tefal, LG, Bork');
                this.info();
            break;
            default: 
                console.log('The kettle was not turned on');
            break;
        }
    };
    
    this.info = function() {
        switch(this.ktl) {
            case 'Tefal', 'tefal':
                this.name = 'Tefal';
                this.volume = '1,5 liter';
                this.electric = 'electrically';
                this.color = 'blue';
            break;
            case 'LG', 'lg':
                this.name = 'LG';
                this.volume = '5 liter';
                this.electric = 'not electrically';
                this.color = 'grey';
            break;
            case 'Bork', 'bork':
                this.name = 'Bork';
                this.volume = '1,5 liter';
                this.electric = 'electrically';
                this.color = 'purple';
            break;
            default: 
                console.log('Wrong Value');
        }
        this.show();
    };

    this.show = function() {
        console.log('The kittle you have chosen: ' + this.ktl + '. Its volume: ' + this.volume + '. How it heats: ' + this.electric + '. Its color: ' + this.color);
      
        
    };
};
   
let kettle = new Kettle;

kettle.get();