# 🎵 Spotify Music Player Clone

A fully functional music player web application inspired by Spotify Clone, built with vanilla HTML, CSS, and JavaScript. This project features a clean, modern UI with essential music playback controls and an intuitive user experience.

![Project Status](https://img.shields.io/badge/Status-Complete-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

---

## ✨ Features

### 🎼 **Music Playback**
- **Play/Pause Control** - Seamless audio playback with master controls
- **Next/Previous Track** - Navigate through your playlist effortlessly
- **Individual Song Controls** - Click any song to play it instantly
- **Auto-Sync UI** - Play/pause buttons sync across all controls

### 🎚️ **Interactive Controls**
- **Progress Bar** - Real-time song progress with seek functionality
- **Volume Control** - Adjustable volume slider with visual feedback
- **Responsive Sliders** - White progress indicators for both song and volume

### 🎨 **User Interface**
- **Modern Design** - Clean, Spotify-inspired aesthetic
- **Smooth Animations** - Hover effects and transitions throughout
- **Album Art Display** - Visual feedback with animated GIF during playback
- **Scrollable Playlist** - Vertical scrolling with custom styled scrollbar
- **Fixed Bottom Controls** - Always accessible player controls

### 📱 **User Experience**
- **10-Song Playlist** - Curated upbeat music collection
- **Song Information Display** - Real-time current song name
- **Visual Feedback** - Active song highlighting
- **Intuitive Layout** - Three-column grid design (song info | controls | volume)

---

## 🚀 Demo

### Playlist Includes:
1. A Sky Full of Stars
2. I Think They Call This Love
3. Can't Help Falling in Love - Elvis Presley
4. Yellow - Coldplay
5. Sparks - Coldplay
6. Untangled Love - Brandon Flowers
7. Piano Man - Billy Joel
8. Up&Up
9. Adventure of a Lifetime
10. Viva La Vida - Coldplay

---

## 🛠️ Technologies Used

- **HTML5** - Semantic markup and structure
- **CSS3** - Custom styling, Grid layout, Flexbox, animations
- **JavaScript (ES6)** - DOM manipulation, event handling, audio control
- **Font Awesome** - Icon library for UI elements
- **Google Fonts** - Lato and Montserrat typography

---

## 📂 Project Structure

```
spotify-clone/
│
├── index.html          # Main HTML file
├── style.css           # Styling and layout
├── script.js           # JavaScript functionality
├── Spotify.png         # Logo
├── background.jpeg     # Container background
├── animation.gif       # Playback animation
│
├── covers/             # Album cover images
│   ├── 1.jpeg
│   ├── 2.jpeg
│   └── ...
│
└── songs/              # Audio files
    ├── 1.mp3
    ├── 2.mp3
    └── ...
```

---
## Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Kshitij-Nale/Music-web-Project
   ```

2. **Navigate to project directory**
   ```bash
   cd Music-web-Project
   ```

3. **Add your music files**
   - Place your `.mp3` files in the `songs/` folder (named 1.mp3, 2.mp3, etc.)
   - Place corresponding cover images in the `covers/` folder (named 1.jpeg, 2.jpeg, etc.)

4. **Open in browser**
   ```bash
   # Simply open index.html in your preferred browser
   # Or use a local server:
   python -m http.server 8000
   # Then visit: http://localhost:8000
   ```

---

## 🎯 Key Functionalities

### Audio Control System
- Dynamically loads and plays audio files
- Maintains playback state across UI elements
- Smooth transitions between tracks
- Default volume set to 50%

### Progress Management
- Real-time progress tracking
- Click-to-seek functionality
- White progress indicator overlay
- Synchronized with audio playback

### Smart Button States
- Master play/pause syncs with individual song buttons
- Active song shows pause icon while playing
- All other songs display play icons
- Visual feedback on hover

### Scroll Behavior
- Vertical scrolling within playlist
- Custom semi-transparent scrollbar
- Appears on hover for clean look
- Smooth scrolling experience

---

## 🌟 Highlights & Strengths

### ✅ **Clean Code Architecture**
- Well-organized CSS with clear section comments
- Modular JavaScript with reusable functions
- Semantic HTML structure

### ✅ **Responsive Design Elements**
- Fixed positioning for always-accessible controls
- Proper spacing and padding throughout
- Scalable components

### ✅ **Performance Optimized**
- Efficient DOM manipulation
- CSS transitions for smooth animations
- Minimal JavaScript overhead

### ✅ **User-Centric Design**
- Intuitive control placement
- Clear visual hierarchy
- Consistent design language
- Accessible color contrasts

### ✅ **Maintainable Codebase**
- Array-based song management
- Easy to add/remove songs
- Centralized configuration
- Clear variable naming

---

## 🎨 Design Features

- **Color Scheme**: Black navigation/controls with warm antiquewhite background
- **Typography**: Lato for body text, Montserrat for navigation
- **Layout**: CSS Grid for bottom controls, Flexbox for song items
- **Icons**: Font Awesome for consistent iconography
- **Animations**: Smooth hover effects and opacity transitions

---

## 📚 Learning Outcomes

This project demonstrates proficiency in:
- 🎵 **Web Audio API** - Playing and controlling audio
- 🎨 **CSS Grid & Flexbox** - Modern layout techniques
- ⚡ **Event Handling** - Click events, input changes, time updates
- 🔄 **State Management** - Tracking current song and play state
- 🎯 **DOM Manipulation** - Dynamic updates and class toggling
- 📱 **UI/UX Design** - Creating intuitive interfaces

---

## 🔧 Customization

### Adding New Songs
1. Add MP3 file to `songs/` folder
2. Add cover image to `covers/` folder
3. Update the `songs` array in `script.js`:

```javascript
{
    songName: "Your Song Name", 
    filepath: "songs/11.mp3", 
    coverPath: "covers/11.jpeg"
}
```

### Changing Styles
- Edit `style.css` to modify colors, sizes, and animations
- Main sections are clearly commented for easy navigation


## 🐛 Known Issues & Future Improvements

### Potential Enhancements:
- [ ] Add shuffle functionality
- [ ] Implement repeat modes (one/all)
- [ ] Create playlists feature
- [ ] Add search/filter capability
- [ ] Display remaining time
- [ ] Keyboard shortcuts support
- [ ] Equalizer visualization
- [ ] Lyrics display
- [ ] Local storage for preferences
- [ ] Mobile responsive breakpoints

---

## 👨‍💻 Author

**Kshitij**

Feel free to reach out for collaborations or questions!


## 📄 License

This project is open source and available under the [MIT License](LICENSE).


## 🙏 Acknowledgments

- Inspired by Spotify's clean and intuitive interface
- Font Awesome for the icon library
- Google Fonts for typography
- All the artists whose music makes this player come alive

---

## 📸 Screenshots

*Add screenshots of your application here showing:*
- Main playlist view
- Player controls in action
- Hover states
- Active song playing

---

## 🌐 Live Demo

[View Live Demo](#) *(https://musicwebproject-psi.vercel.app/)*

---

## ⭐ Show Your Support

If you found this project helpful or interesting, please consider giving it a star! ⭐

---

<div align="center">

**Made with ❤️ and lots of ☕**

*Music is life, code is passion* 🎵

</div>