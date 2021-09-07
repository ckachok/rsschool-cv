### 1. My Name
               
**Sergei Gul**

***

### 2. Contact Info

- **Email:** mefelion89@gmail.com  
- **Discord:** mef#0388
- **Telegram:** @Mefelion

***

### 3. Summary               

#### Objective:

> - learn JavaScript and master the profession of frond-end developer  
> - learn programming languages - С#, C++  
> - find a job related to IT

#### Personal and business qualities that I possess:

> - responsiveness and politeness  
> - self-confidence  
> - the ability to achieve goals    
> - creative and systems thinking  
> - attention to details  
> - teamwork skills  
> - striving for professional development 
 
#### Hobbies:

> - volleyball
> - outdoor activities    
> - visiting cinemas  

***

### 4. Skills

- HTML Basics
- CSS Basics
- JS Basics
- Figma
- Git

***

### 5. Code example

```javascript
const btnPlay = document.querySelector('.playback');
const btnPlayBig = document.querySelector('.btn-play');
const btnNext = document.querySelector('.next');
const btnPrev = document.querySelector('.prev');
const btnVolume = document.querySelector('.volume');
const volumeIcon = document.getElementById('volume');
const playIcon = document.getElementById('playback');
const btnFullscreen = document.querySelector('.fullscreen');
const volumeProgress = document.querySelector('.volume__progress');
const playbackProgress = document.querySelector('.playback__progress');
const playerViewport = document.querySelector('.player__viewport');

let initVolumeValue;
let countVideo = 0;
let curVolumeValue = volumeProgress.value;
let initSpeed = 1;

const videos = [
  {
    src: 'assets/video/section__video__the-louvre.mp4',
    poster: 'assets/img/section__video__poster1-louvre.jpg'
  },
  {
    src: 'assets/video/section__video__exhibition-body-and-soul.mp4',
    poster: 'assets/img/section__video__poster2-louvre.jpg'
  },
  {
    src: 'assets/video/section__video__lesser-known-masterpieces.mp4',
    poster: 'assets/img/section__video__poster3-louvre.jpg'
  }
]

function pauseVideo() {
  playerViewport.pause();

  btnPlayBig.style.display = 'inline-block';
  playIcon.setAttribute('src', 'assets/svg/player__playback-icon.svg');
  playIcon.setAttribute('id', 'playback');

  setTimeout(() => {
    btnPlayBig.style.opacity = 1;
  }, 100);
}
```

***

### 6. Experience

**Completed projects:**
- [Custom video player](https://rolling-scopes-school.github.io/ckachok-JSFEPRESCHOOL/custom-video-player/)
- [Vertical slider](https://rolling-scopes-school.github.io/ckachok-JSFEPRESCHOOL/vertical-slider/)
- [Virtual-piano](https://rolling-scopes-school.github.io/ckachok-JSFE2021Q1/virtual-piano/)
- [Photo-filter](https://rolling-scopes-school.github.io/ckachok-JSFE2021Q1/photo-filter/)
- [Wildlife](https://rolling-scopes-school.github.io/ckachok-JSFE2021Q1/wildlife/)
- [Museum](https://rolling-scopes-school.github.io/ckachok-JSFEPRESCHOOL/museum/)
- [Online-zoo](https://rolling-scopes-school.github.io/ckachok-JSFE2021Q1/online-zoo/pages/landing/landing.html)

***

### 7. Education

1. **2007 - 2011** (secondary special education) **«Minsk State Higher Radio Engineering College»**  
   - ***Department:*** radio engineering
   - ***Specialty:*** design and manufacture of radioelectronic facilities
   - ***Qualification:*** technician-technologist
1. **2011 - 2014** (higher education) **«Minsk State Higher Radio Engineering College»**
   - ***Faculty:*** professional training
   - ***Specialty:*** professional training (radioelectronics)
   - ***Qualification:*** teacher-engineer

***

### 8. English level

**A2** - I continue to improve my level of English at the courses of the company ["World without Borders"](https://mbg.by/)