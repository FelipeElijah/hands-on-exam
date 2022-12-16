let consultants = [
    { name: 'Peyton Turner', company: 'Walker Inc' },
    { name: 'Isaias Fritsch', company: 'Walker Inc' },
    { name: 'Susana Wilderman', company: 'Nolan Inc' }
];

let CompanyWithEmployees = {
    WalkerInc: [
        {
        name:name,
        company:company,
        }
    ],
    NolanInc: [
        {
        name:name,
        company:company,
        }
    ]
}

function OrganizedByCompany(){

    if(consultants.company == 'Walker Inc'){
        CompanyWithEmployees.WalkerInc.name = consultants.name;
        CompanyWithEmployees.WalkerInc = consultants.company;
    } else{
        CompanyWithEmployees.NolanInc.name= consultants.name;
        CompanyWithEmployees.NolanInc = consultants.company;
    }
}

OrganizedByCompany();