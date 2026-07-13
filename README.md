# Optics Simulator - Professional Educational Website

A comprehensive, interactive educational website for teaching image formation by mirrors and lenses using ray tracing and physics simulations.

## 🎓 Features

### Simulations
- **Plane Mirror**: Understand reflection from flat surfaces
- **Concave Mirror**: Study converging mirrors and real/virtual image formation
- **Convex Mirror**: Explore diverging mirrors
- **Convex Lens**: Learn converging lens behavior
- **Concave Lens**: Understand diverging lenses

### Educational Tools
- **Ray Tracing**: Accurate ray diagrams using optics rules
- **Interactive Canvas**: Real-time visualization with 60 FPS animations
- **Formula Calculator**: Mirror, Lens, Magnification, and Power calculators
- **Live Information Panel**: Display all optical parameters
- **Practice Mode**: Random numericals with hints and solutions

### User Experience
- **Responsive Design**: Works on mobile, tablet, laptop, and smart-boards
- **Dark/Light Themes**: Glassmorphism UI with smooth transitions
- **Interactive Controls**: Sliders for object height, distance, and focal length
- **Touch & Mouse Support**: Drag objects, zoom, and pan
- **Keyboard Shortcuts**: P (Play), R (Reset), F (Fullscreen), D (Dark Mode)
- **Accessibility**: WCAG compliant with semantic HTML

## 📁 Folder Structure

```
optics-simulator/
├── index.html                 # Home page with navigation
├── PlaneMirror.html          # Plane mirror simulation
├── ConcaveMirror.html        # Concave mirror simulation
├── ConvexMirror.html         # Convex mirror simulation
├── ConvexLens.html           # Convex lens simulation
├── ConcaveLens.html          # Concave lens simulation
├── Formula.html              # Formula reference & calculators
├── About.html                # About the simulator
├── css/
│   ├── style.css             # Global styles & theme
│   ├── simulation.css        # Simulation page styles
│   └── formula.css           # Formula page styles
├── js/
│   ├── common.js             # Shared utilities & theme manager
│   ├── physics.js            # Physics calculations & ray tracing
│   ├── canvas-renderer.js    # Canvas rendering engine
│   ├── PlaneMirror.js        # Plane mirror simulation logic
│   ├── ConcaveMirror.js      # Concave mirror simulation logic
│   ├── ConvexMirror.js       # Convex mirror simulation logic
│   ├── ConvexLens.js         # Convex lens simulation logic
│   ├── ConcaveLens.js        # Concave lens simulation logic
│   ├── calculator.js         # Calculator implementations
│   └── formula.js            # Formula page logic
├── assets/
│   ├── icons/                # SVG icons
│   └── images/               # Reference images
└── README.md                 # This file
```

## 🚀 Quick Start

1. **Clone or Download**: Get the project files
2. **Open in Browser**: Simply open `index.html` in any modern web browser
3. **No Installation**: Works completely offline - no dependencies!

## 💻 Browser Compatibility

- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔬 Physics Formulas Used

### Mirror Equation
```
1/f = 1/u + 1/v
```
Where:
- `f` = Focal length
- `u` = Object distance
- `v` = Image distance

### Lens Equation
```
1/f = 1/u + 1/v
```
Same as mirror equation!

### Magnification
```
m = -v/u = h'/h
```
Where:
- `m` = Magnification
- `h'` = Image height
- `h` = Object height
- `-v/u` considers Cartesian sign convention

### Power of Lens/Mirror
```
P = 1/f (in diopters when f is in meters)
```

### Lens Maker's Formula
```
1/f = (n-1)[1/R₁ - 1/R₂]
```
Where:
- `n` = Refractive index
- `R₁, R₂` = Radii of curvature

## 📐 Cartesian Sign Convention

- **Light travels** left to right (positive direction)
- **Distances measured** from pole:
  - **Right (+)**: In direction of light propagation
  - **Left (-)**: Against direction of light propagation
- **Heights measured** from principal axis:
  - **Up (+)**: Above the axis
  - **Down (-)**: Below the axis

## 🎮 Controls & Shortcuts

| Control | Action |
|---------|--------|
| **P** | Play animation |
| **R** | Reset simulation |
| **F** | Fullscreen |
| **D** | Toggle dark mode |
| **Mouse Drag** | Move object or pan canvas |
| **Touch Drag** | Move object (mobile) |
| **Scroll/Pinch** | Zoom in/out |
| **Click Reset** | Reset all values |
| **Click Screenshot** | Download PNG |

## 🏆 Special Cases Handled

### Mirrors & Lenses
- Object at infinity
- Object at center of curvature (2F)
- Object at focal point
- Object between focal point and pole
- Object beyond center of curvature

### Image Types
- ✓ Real vs Virtual images
- ✓ Erect vs Inverted
- ✓ Magnified vs Diminished vs Same size
- ✓ Correct position and orientation

## 🌙 Theme System

- **Light Theme**: Clean white background with soft shadows
- **Dark Theme**: Dark background with glassmorphism effects
- **Persistent**: Theme preference saved in localStorage
- **Smooth Transitions**: CSS transitions between themes

## ⚙️ Settings

All settings are saved locally:
- Theme preference
- Animation speed
- Grid visibility
- Labels visibility
- Formula display
- Measurements display

## 🧮 Calculators

1. **Mirror Formula Calculator**: Solve for any unknown
2. **Lens Formula Calculator**: Solve for any unknown
3. **Magnification Calculator**: Calculate magnification
4. **Image Height Calculator**: Calculate image height
5. **Power Calculator**: Calculate optical power
6. **Unit Converter**: Convert between units

## 📚 Learning Resources

### Formula Page Includes
- Mirror formula derivation
- Lens formula derivation
- Magnification formula
- Power formula
- Lens maker's formula
- Sign conventions explained
- Image formation tables
- Ray tracing rules
- Worked examples

### Practice Mode
- **3 Difficulty Levels**: Easy, Medium, Hard
- **Random Numericals**: Unlimited problems
- **Hints**: Step-by-step guidance
- **Solutions**: Detailed explanations
- **Scoring**: Track your progress
- **Timer**: Challenge yourself

## 🎨 Code Architecture

### Modular Design
- **physics.js**: Pure physics calculations
- **canvas-renderer.js**: Canvas drawing logic
- **common.js**: Shared utilities
- Individual simulation files: Specific logic

### Best Practices
- ES6 modules
- Separation of concerns
- Reusable classes
- Well-commented code
- No duplicate code
- Responsive design patterns

## 🔒 Privacy & Offline

- ✓ No external requests
- ✓ No tracking
- ✓ No user data collected
- ✓ Works offline completely
- ✓ LocalStorage for settings only

## 🚀 Future Improvements

- [ ] Multi-language support (Hindi, Spanish, etc.)
- [ ] Advanced ray optics (multiple lenses/mirrors)
- [ ] Fiber optics visualization
- [ ] Diffraction and interference
- [ ] 3D visualization (WebGL)
- [ ] Export simulations as videos
- [ ] Collaborative features
- [ ] Assessment mode for teachers
- [ ] Mobile app version

## 📝 License

Free for educational use.

## 🤝 Contributing

Contributions welcome! This is an open educational resource.

## 📧 Support

For issues or suggestions, please create an issue in the repository.

---

**Made with ❤️ for students of optics**
