const formatDate = (dateString) => {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);

};

const formatGender = (gender) => {
    const translate = {
        'Male': 'Masculino',
        'Female': 'Femenino',
        'unknown': 'Desconocido',
        'Genderless': 'Sin Género'
    }
    return translate[gender];
}


const formatStatus = (status) => {
    const translate = {
        'Alive': 'Vivo',
        'Dead': 'Muerto',
        'unknown': 'Desconocido'
    }
    return translate[status];
}

module.exports = {
    formatDate,
    formatGender,
    formatStatus
}