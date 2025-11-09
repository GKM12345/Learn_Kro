# Learn Kro — Web + Mobile (Monorepo)

## GitHub Repository
[https://github.com/GKM12345/Learn_Kro](https://github.com/GKM12345/Learn_Kro)

---

## Working Application  
This project is a **single monorepo** that contains both a **React(Vite) + Chakra-UI** web app and a **React Native (Expo)** mobile app that opens the same website via WebView.


### Folder Structure
Learn_Kro/ <br>
├── learning-web/ → React + Chakra UI web app (hosted on Vercel) <br>
└── learning-app/ → Expo mobile app (WebView wrapper)


- **Web App (learning-web)**  
  Hosted on Vercel: [https://learn-kro.vercel.app](https://learn-kro.vercel.app)  
  1. When User will open the url mentioned above then User can get login and signup page. User can able to Login via any email/password (open for now).
  2. Dashboard will open with future features List that can be implemented.
  3. Naviage to Course Tab or Explore Course Dashboard User can get List of Course showing User Enrolled course, expired and new Course. **This List have an ability feature of Lifetime Accessable Course or Monthly Based Subscription / Expired Courses need again Renew.**
  4. User can go to enrolled course and see videos where they left and back and forth option and can change videos from section also.
  5. All the mock data are accordingly which supports like real Apis that industries follow.
  6. User can Logout, Change theme dark/light mode.


- **Mobile App (learning-app)** 
  1. Built using **Expo SDK 54**, displays the same website inside a WebView.
  2. Feels Like Native App and UI Design supports Mobile First Design.
  3. All the feature mentioned above in Web App (learning-web) are supported here. User can change theme from settings section and logout from profile section.
  4. Supports fullscreen video playback, and Android back button navigation.

---

## Steps to Run and Build

### 1. Setup Locally

**Prerequisite** 
1. Node.js (>= 18)
2. npm required
3. Expo App for preview
4. Expo account to create android or ios build

```bash
git clone https://github.com/GKM12345/Learn_Kro.git
cd .\Learn_Kro\

# Install All Dependencies of Project
npm run setup 

# To Start Web Server
# Open https://localhost:5173/ this url on browser.
npm run start:web 

# To Start App Server
# Scan the QR code or Open Link using the Expo Go app on your device to preview.
npm run start:app
```

### 2. Create Android Build & Install App

```bash
# go to learning-app dir.
cd .\learning-app\

npm install -g eas-cli

# check eas version
eas --version

# login using expo credential (required to create build using cloud dependencies)
eas login

# Configure the build created for
eas build:configure

# Run this command and wait for 10-15min
eas build -p android --profile preview
```

After that you will get url open in android mobile or scan the qr and install the app

I have already created please install it after enterting this url from browser.
[https://expo.dev/accounts/gkm01/projects/learning-app/builds/57407883-6a92-4b97-ab9c-c59383432de3](https://expo.dev/accounts/gkm01/projects/learning-app/builds/57407883-6a92-4b97-ab9c-c59383432de3)


## Author
**Gaurav Kumar Mishra** <br>
**Engineer 2 - Software Develeopment**
