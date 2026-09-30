# Anastasia's Birthday Quest

A first person pixel birthday story, beginning in Moscow and continuing in Grenoble.

## Play

Open `index.html` in a modern browser. The opening screen shows Anastasia's portrait (`Photos/Anastasia.JPG`) and introduces her story. Click **Start the Game** to see her school-ending photo with her mother (`Photos/university.JPG`). Continue, then hold **W**, **↑**, or the on-screen **Hold to Walk** button. Use **A/D** to look around.

The first walk leads to the university building (`Photos/pleshka.jpg`). Choose **Join University** to watch three alternating rounds of partying and studying, or **Skip It**. An **Anastasia Levels Up** popup marks Level 02, and her current level stays visible on the game screen.

Still in Moscow, Anastasia walks to the Schneider Electric building (`Photos/schneider_dvintsev.jpg`). Choose **Become an Intern** to see three alternating rounds of working and partying, or **Skip It**. If she joins, she walks through the building corridors and meets Aleksey in `Photos/prince_2.JPG`. The next card reveals him as a brilliant producer with `Photos/prince.jpg`; he invites her to star in the playable film `Photos/video_story.m4v` with English subtitles. A separate love-story card leads into their 2020 Moscow wedding photo (`Photos/marriage.jpg`). After Level 03, a musical flight animation shows Anastasia and Aleksey moving from Moscow to Grenoble in 2020.

In Grenoble, the first walk leads to Toliki (`Photos/toliki.jpg`). The friendship and Anastasia's continuing film career lead into **Friday Night** (`Photos/friday_night_story.m4v`). She walks again and meets puppy Kaiko (`Photos/kaiko.jpg`), watches his puppy video (`Photos/kaiko_story.m4v`), and sees grown-up Kaiko in `Photos/IMG_3482.jpeg`. The configurable guest encounters follow. Each guest interaction has a two-person animation and matching synthesized music.

After the fifth guest, Anastasia visits **Barrio Latino**. She dances with Puta Madre and takes six tequila shots. The street view stays tipsy afterward. Aleksey is always the final encounter.

For the most reliable local experience, run a local web server from this folder and open its local URL. For example:

```sh
python3 -m http.server 8000
```

## Customize

Open **Menu** to rename guests, change their roles and types, include or exclude them, reorder them, change each one's actions, add a custom action, or upload a new photo. The editor saves to browser storage. Use **Export List** to back up the configuration or move it to another browser; **Import List** restores it. Uploaded photos are resized before saving.

The starter list includes 22 guest photos. Names are placeholders because the photos were not labeled. The university, Schneider internship, prince and movie sequence, Puta Madre, and Aleksey are fixed story moments. The original camera videos stay on the local computer; the browser-friendly `.m4v` copies are included in the game and GitHub repository. The English subtitle text is in `Photos/video_story.en.vtt` and is also displayed by the game for reliable local playback. Captions start on and can be toggled with **CC ON/OFF**. All three story videos start automatically when their scenes open. If a browser blocks playback with sound, the video starts muted and shows a **Turn On Sound** button; if it blocks playback entirely, a Play button remains available. Music and sound effects are synthesized in the browser and require no audio files. The pixel font is loaded from Google Fonts when available; the game works with a monospace fallback offline.
