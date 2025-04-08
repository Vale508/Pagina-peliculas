// Seleccionar todas las tarjetas
const cards = document.querySelectorAll('.terceras');

// Iterar sobre cada tarjeta
cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const { offsetWidth: width, offsetHeight: height } = card;
        const { offsetX: x, offsetY: y } = e;
        
        // Calcular los ángulos de rotación basados en la posición del mouse
        const rotateX = ((y / height) - 0.5) * 50;
        const rotateY = ((x / width) - 0.5) * -50;

        // Aplicar la transformación de rotación a la tarjeta
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
        // Resetear la rotación al salir del área de la tarjeta
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    });
});
