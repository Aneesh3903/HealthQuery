const hospitals = [
    { disease: 'Corona', hospital: 'City Hospital', beds: 15 },
    { disease: 'Dengue', hospital: 'Community Health Center', beds: 5 },
    { disease: 'Malaria', hospital: 'General Hospital', beds: 8 },
    { disease: 'Flu', hospital: 'Regional Medical Center', beds: 10 },
    { disease: 'COVID', hospital: 'Super Specialty Hospital', beds: 20 }
];

function displayHospitals(hospitalData) {
    const hospitalList = document.getElementById('hospital-list');
    hospitalList.innerHTML = '';

    if (hospitalData.length === 0) {
        hospitalList.innerHTML = '<tr><td colspan="3">No hospitals found.</td></tr>';
        return;
    }

    hospitalData.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${item.disease}</td><td>${item.hospital}</td><td>${item.beds}</td>`;
        hospitalList.appendChild(row);
    });
}

function filterHospitals() {
    const searchValue = document.getElementById('search').value.toLowerCase();
    const filteredHospitals = hospitals.filter(item => item.disease.toLowerCase().includes(searchValue));
    displayHospitals(filteredHospitals);
}

displayHospitals(hospitals);
const doctors = ['Dr.khushi', 'Dr. Shashank', 'Dr. Suraj', 'Dr. Rahul'];

function searchDoctor() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const doctorList = document.getElementById('doctorList');
    doctorList.innerHTML = '';

    const filteredDoctors = doctors.filter(doctor => doctor.toLowerCase().includes(searchInput));
    if (filteredDoctors.length > 0) {
        filteredDoctors.forEach(doctor => {
            const doctorDiv = document.createElement('div');
            doctorDiv.className = 'doctor';
            doctorDiv.textContent = doctor;
            doctorDiv.onclick = () => openChat(doctor);
            doctorList.appendChild(doctorDiv);
        });
    } else {
        doctorList.innerHTML = '<p>No doctors found</p>';
    }
}