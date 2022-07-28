interface IPackage {
    Company: string;
    Weight: number;
    TrackingNumber: number;
}

interface IPerson {
    Name: string;
    Age?: number;
}

interface IPet {
    Name: string;
    Age: number;
    Owner?: Person | undefined;
    Vaccinated?: boolean | undefined;
}

interface IProduct {
    Name: string;
    Code: number;
}

export class Package {
    public Company: string;
    public Weight: number;
    public TrackingNumber: number;

    constructor(p: IPackage) {
        this.Company = p.Company;
        this.Weight = p.Weight;
        this.TrackingNumber = p.TrackingNumber;
    }
}

export class Person implements IPerson {
    public Name: string;
    public Age: number;

    constructor(pet: IPet) {
        this.Name = pet.Name;
        this.Age = pet.Age;
    }
}

export class Pet implements IPet {
    public Name: string;
    public Age: number;
    public Owner?: Person | undefined;
    public Vaccinated?: boolean | undefined;

    constructor(pet: IPet) {
        this.Name = pet.Name;
        this.Age = pet.Age;
        this.Owner = pet.Owner;
        this.Vaccinated = pet.Vaccinated;
    }
}

export class Dog extends Pet {
    public Speak(): string {
        return 'Bark';
    }
}

export class PetOwner {
    constructor(public Name: string, public Pets: Pet[]) {}
}

export class Product implements IProduct {
    public Name: string;
    public Code: number;

    constructor(product: IProduct) {
        this.Name = product.Name;
        this.Code = product.Code;
    }
}
