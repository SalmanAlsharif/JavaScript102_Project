class Vehicles{
  // المركبات
  constructor(name,ManufactureCompany,ID){
    this.name= name;
    this.ManufactureCompany= ManufactureCompany;
    this.ID=ID;
  }
}

class Car extends Vehicles{
    // السيارة
    constructor(name,ManufactureCompany,ID,TypeOfCar){
      super(name,ManufactureCompany,ID);
      this.TypeOfCar=TypeOfCar;
  }
}

class Plane extends Vehicles{
    // الطيارة
    constructor(name,ManufactureCompany,ID,Planetype){
    super(name,ManufactureCompany,ID);
    this.Plane=Planetype;
  }
}

class Employee{
  // الموظفين
  constructor(ID,DateofBirth){
    this.ID=ID;
    this.DateofBirth=DateofBirth;
  }
}

class Driver extends Employee{
  // السائق
  constructor(ID,DateofBirth,licenseID){
  super(ID,DateofBirth);
    this.licenseID=licenseID;
  }
}

class Pilot extends Employee{
  // الطيار
  constructor(ID,DateofBirth,licenseID){
  super(ID,DateofBirth);
    this.licenseID=licenseID;
  }
}

class Reservations{
  // الحجوزات
  constructor(employeeId,reservationDate,reservationID,vehiclesId){
    this.employeeId=employeeId;
    this.reservationDate=reservationDate;
    this.reservationID=reservationID;
    this.vehiclesId=vehiclesId;
  }
}

function check(EmployeeID,VehicleID , object){

}


const FirstCar = new Car('Taurus','Ford','1','Gas');
const SecondCar = new Car('Model Three','Tesla','2','Electric');
const ThirdCar = new Car('Expedition','Ford','3','Gas');
const FirstPlane = new Plane('A321','Airbus','4','A321');
const SecondPlane = new Plane('A342','Airbus','5','A342');
