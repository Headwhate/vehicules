var vehicule = function (modele,kilometrage, moteur, couleur)
{
	this.modele = modele;
	this.kilometrage = kilometrage;
	this.moteur= moteur||'serie';
	this.couleur= couleur||'pink';
	this.voyage = function(x) {

		this.kilometrage +=x;
	}
};

ferrari = new vehicule();
twingo= new vehicule();
peugeot= new vehicule();
amsperdam= new vehicule();
poligone= new vehicule();