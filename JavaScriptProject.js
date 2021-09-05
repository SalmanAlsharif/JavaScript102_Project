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
    static NumberOfReservations = 1;

      // الحجوزات
      constructor(employeeId,reservationDate,reservationID,vehiclesId){
        this.employeeId=employeeId;
        this.reservationDate=new Date();
        this.reservationID=reservationID;
        this.vehiclesId=vehiclesId;
        Reservations.NumberOfReservations++;
      }
    }

    // Cars
    let FirstCar = new Car('Taurus','Ford',1,'Gas'); // The ID of Cars from 1 - 10
    let SecondCar = new Car('Model Three','Tesla',2,'Electric');
    let ThirdCar = new Car('Expedition','Ford',3,'Gas');

    // Planes
    let FirstPlane = new Plane('A321','Airbus',11,'A321'); // The ID of Planes from 11 - 20
    let SecondPlane = new Plane('A342','Airbus',12,'A342');

    // Employees
    let FirstDriver = new Driver(101,'1995-1-10',123321)  // The ID of Drivers from 100 - 110
    let SecondDriver = new Driver(102,'2000-12-10',781345)  // The ID of Drivers from 100 - 110
    let ThirdDriver = new Driver(103,'1992-5-29',981254)  // The ID of Drivers from 100 - 110

    let FirstPilot = new Pilot(111,'1992-12-7',142536) // The ID of Pilots from 111 - 120
    let SecondPilot = new Pilot(115,'1987-4-7',741581) // The ID of Pilots from 111 - 120

    const ReservationArray =[];   // Array

    const Check= function(EmployeeID,VehicleID){

      if((VehicleID instanceof Car && EmployeeID instanceof Driver) ||
        (VehicleID instanceof Plane &&  EmployeeID instanceof Pilot)){

      let ReservationObject=new Reservations(EmployeeID,new Date(),Reservations.NumberOfReservations,VehicleID);
      ReservationArray.push(ReservationObject);

      }else{
      console.log('The employee ID does not apply with the vehicle ID');
      }
    }

    Check(FirstPilot,FirstPlane);
    Check(SecondDriver,SecondCar);


    ReservationArray.map((Reservation, i) => {
    console.log('Reservation Id: ' +  Reservation.reservationID + '\tReservation Date: ' + Reservation.reservationDate +'\n')
  })
