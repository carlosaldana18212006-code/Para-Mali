# Hello Kitty Drawing Animation 💖

Una página web romántica con animación de dibujo SVG de Hello Kitty, optimizada para dispositivos móviles y con efectos interactivos profesionales.

## 🌟 Características

- **Animación SVG progresiva**: Hello Kitty se dibuja línea por línea en 10 segundos
- **Mensaje romántico**: Efecto de escritura a máquina con texto personalizable
- **Diseño responsivo**: Optimizado para móviles, tablets y desktop
- **Efectos interactivos**: Corazones flotantes y animaciones suaves
- **Experiencia profesional**: Transiciones fluidas y diseño elegante

## 📱 Compatibilidad

- ✅ **Móviles**: iPhone, Android (360px+)
- ✅ **Tablets**: iPad, Android tablets (768px+)
- ✅ **Desktop**: Todas las resoluciones modernas
- ✅ **Navegadores**: Chrome, Firefox, Safari, Edge

## 🚀 Instalación

1. **Descarga los archivos**:
   - `index.html`
   - `styles.css`
   - `script.js`

2. **Abre en navegador**:
   ```
   Simplemente abre index.html en cualquier navegador moderno
   ```

## 📁 Estructura del Proyecto

```
Hello Kitty/
│
├── index.html      # Página principal con SVG integrado
├── styles.css      # Estilos y animaciones
├── script.js       # Lógica de interacción
├── README.md       # Esta documentación
└── LICENSE         # Licencia del proyecto
```

## 🎨 Personalización

### Cambiar el mensaje romántico:
Edita el texto en `index.html`:
```html
<div class="romantic-text typing-text" id="typingText">
    Tu mensaje personalizado aquí...
</div>
```

### Ajustar colores:
Modifica las variables CSS en `styles.css`:
```css
:root {
    --primary-color: #ff69b4;
    --accent-color: #cc2229;
    --text-color: #2c3e50;
}
```

### Modificar timing:
Cambia el tiempo en `script.js`:
```javascript
setTimeout(() => {
    continueBtn.classList.remove('hidden');
}, 10000); // Cambiar 10000 (10 segundos)
```

## 🔧 Características Técnicas

- **SVG optimizado**: Dibujo vectorial escalable sin pérdida de calidad
- **CSS3 animations**: Animaciones fluidas con `stroke-dasharray`
- **ES6+ JavaScript**: Código moderno y optimizado
- **Google Fonts**: Tipografías profesionales (Poppins, Dancing Script)
- **Mobile-first**: Diseño pensado primero para móviles

## 📖 Uso

1. **Carga la página** → La animación inicia automáticamente
2. **Espera 10 segundos** → Aparece el botón "Continuar"
3. **Haz clic** → Se muestra el mensaje romántico con efectos
4. **Disfruta** → Corazones flotantes y texto animado

## 🐛 Solución de Problemas

### El texto se ve muy pequeño en móvil:
- El CSS incluye optimizaciones específicas para móviles
- Si persiste, verifica que tu navegador permita zoom

### La animación no se ve completa:
- Asegúrate de tener conexión a internet (para las fuentes)
- Actualiza el navegador a una versión moderna

### El botón no aparece:
- Espera exactamente 10 segundos desde la carga
- Revisa que JavaScript esté habilitado

## 💝 Mensaje del Desarrollador

Esta página fue creada con amor para celebrar momentos especiales. Cada línea de código está pensada para crear una experiencia mágica y memorable.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

---

*Hecho con 💖 para crear momentos especiales*