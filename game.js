(() => {
'use strict';
const PHOTO = 'Photos/';
const anastasiaAvatars = ['IMG_4416.jpeg','an1.jpg','an2.jpg','an3.jpg','an4.jpg','an5.jpg'].map(file=>PHOTO+file);
const photos = [
  ['0047f0ae-093a-49f8-a82b-873dc5ed96aa.jpg','woman','Friend'],
  ['040ad64f-e1bd-41e6-9463-6cd9bfae8193.jpg','man','Friend'],
  ['1256e77c-c4b1-4f9d-893e-aa8b459e3a84.jpg','man','Friend'],
  ['187dfc9b-61c8-4978-ad62-1fcf5ccdb854.jpg','man','Friend'],
  ['1d6b193f-4713-4045-ac57-c8851af3a663.jpg','man','Friend'],
  ['22eeef6a-72c0-4885-ba4f-162276f3d44d.jpg','man','Friend'],
  ['2a0ae650-bfa2-4240-8580-a42e123dda52.jpg','woman','Friend'],
  ['362fcaa5-d570-4881-8c5b-71875900dba3.jpg','man','Friend'],
  ['4f0b3899-187c-4f9c-9417-6d2b60db60c6.jpg','man','Friend'],
  ['61e6b814-3340-4c9e-892d-489fa6ebc783.jpg','woman','Friend'],
  ['6448119f-7756-4442-bf11-d9520f8fd0bc.jpg','man','Friend'],
  ['76C1DC33-07DC-4F1A-8342-A208CBA3C54F.jpg','man','Friend'],
  ['8b97fbc2-8928-455b-a494-24c64475d992.jpg','woman','Friend'],
  ['IMG_0247.jpeg','man','Friend'],
  ['IMG_3087.jpeg','woman','Friends'],
  ['IMG_3482.jpeg','pet','Very good dog'],
  ['IMG_8635.jpeg','man','Friend'],
  ['a6c144d1-33d9-4286-9c84-29ee98b0ab47.jpg','man','Friend'],
  ['b048783e-9db0-404a-a223-55b3a9648464.jpg','man','Friend'],
  ['b1599d11-6783-41d0-83a6-b703fbbef33a.jpg','woman','Friend'],
  ['bd5cb0e6-293d-4504-8135-f5ccc0add804.jpg','man','Friend'],
  ['c0d752e1-4117-435a-a875-8e2c36eb0dce.jpg','man','Friend']
];
const actionInfo = {
 hug:['🤗','Hug','A legendary birthday hug!'],
 kiss:['💋','Kiss','Mwah! An excellent birthday choice.'],
 dance:['💃','Dance','The whole street becomes a dance floor!'],
 sing:['🎤','Sing','An impromptu birthday duet echoes through Grenoble!'],
 toast:['🥂','Toast','To Anastasia and another fabulous year!'],
 highfive:['✋','High five','A perfect high five!'],
 joke:['😂','Tell a joke','Both burst out laughing.'],
 selfie:['📸','Take a selfie','One for the birthday album!'],
 confetti:['🎉','Throw confetti','Birthday confetti everywhere!'],
 spin:['🌀','Spin around','A dizzy, joyful spin!'],
 compliment:['✨','Compliment','A compliment that makes their day.'],
 serenade:['🎵','Serenade','A dramatic serenade begins!'],
 punch:['🥊','Playful punch','A goofy cartoon bonk. Everyone is fine!'],
 ignore:['😎','Ignore','Anastasia struts past like a mysterious movie star.'],
 scissors:['✌️','Scissors','Both laugh and flash scissors with their fingers!'],
 pet:['🐾','Pet','Good dog! Best birthday encounter.'],
 treat:['🦴','Give a treat','Tail wagging intensifies!'],
 boop:['👆','Boop the nose','Boop! Instant happiness.'],
 threewine:['🍷','Three bottles of wine','Bottle one: strategy. Bottle two: karaoke. Bottle three: nobody remembers the agenda.'],
 workevent:['🎪','Plan a legendary work event','They book a venue, add a dance floor, and create the work event people still talk about years later.'],
 ontime:['⏰','Remind him to be on time','Anastasia sets Toni seven alarms. He arrives at 9:01 and calls it early.'],
 venice:['🛶','Go to Venice','The gondolier waits for Toni, naturally. Anastasia has already seen half of Venice.'],
 sevenwine:['🧀','Seven bottles of wine, good cheese, and headache in the morning','Seven bottles, one heroic cheese board, and a morning that requires sunglasses indoors.'],
 responsibilities:['📋','Say yes to more responsibilities','Ganzu offers one task. Anastasia says yes. Suddenly she is running the whole show while his shisha bubbles approvingly.'],
 snowboard:['🏂','Snowboard','Kelly points downhill. Anastasia shouts “I meant the easy slope!” and still lands like a champion.'],
 bardance:['💃','Dance on the bar','Kelly and Anastasia turn the bar into a stage. Even the bartender gives them a standing ovation.'],
 gossip:['🤫','Gossip','One whispered story becomes a six-season series before dessert arrives.']
};
const starterGuests = photos.map((p,i) => ({id:'guest-'+i,name:p[1]==='pet'?'The Birthday Pup':`Mystery Guest ${String(i+1).padStart(2,'0')}`,role:p[2],kind:p[1],photo:PHOTO+p[0],enabled:true,actions:p[1]==='pet'?['pet','treat','boop','selfie']:p[1]==='woman'?['hug','dance','toast','scissors','selfie','sing']:['hug','dance','toast','highfive','joke','punch'],custom:''}));
const featuredActions={Rafa:['scissors','threewine','workevent'],Toni:['punch','ontime','venice'],Nick:['sevenwine'],Ganzu:['responsibilities'],Kelly:['snowboard','bardance','gossip']};
const featuredSeed=[
  {id:'guest-19',name:'Rafa',kind:'woman',photo:PHOTO+'b1599d11-6783-41d0-83a6-b703fbbef33a.jpg'},
  {id:'guest-1',name:'Toni',kind:'man',photo:PHOTO+'040ad64f-e1bd-41e6-9463-6cd9bfae8193.jpg'},
  {id:'guest-21',name:'Nick',kind:'man',photo:PHOTO+'c0d752e1-4117-435a-a875-8e2c36eb0dce.jpg'},
  {id:'guest-20',name:'Ganzu',kind:'man',photo:PHOTO+'bd5cb0e6-293d-4504-8135-f5ccc0add804.jpg'},
  {id:'kelly',name:'Kelly',kind:'woman',photo:PHOTO+'kelly.jpeg'}
];
const otherSeeds=[
  {id:'guest-8',name:'Vino aka Putta Madre',photo:PHOTO+'4f0b3899-187c-4f9c-9417-6d2b60db60c6.jpg'},
  {id:'guest-11',name:'Mystery Guest 12',photo:PHOTO+'76C1DC33-07DC-4F1A-8342-A208CBA3C54F.jpg'}
];
const defaults=[...featuredSeed.map(s=>({role:'Friend',enabled:true,custom:'',...s,actions:featuredActions[s.name]})),...otherSeeds.map(s=>({role:'Friend',kind:'man',enabled:true,actions:['hug','dance','toast','highfive','joke','punch'],custom:'',...s}))];
const university = {id:'university',name:'Pleshka University',role:'Moscow · a choice ahead',kind:'place',photo:PHOTO+'pleshka.jpg',actions:['join','skip']};
const schneider = {id:'schneider',name:'Schneider Electric',role:'Moscow · an internship opportunity',kind:'place',photo:PHOTO+'schneider_dvintsev.jpg',actions:['join','skip']};
const toliki = {id:'toliki',name:'Toliki',role:'Grenoble · new friends',kind:'group',photo:PHOTO+'toliki.jpg'};
const kaiko = {id:'kaiko',name:'Kaiko',role:'Grenoble · a very cute puppy',kind:'pet',photo:PHOTO+'kaiko.jpg'};
const barrio = {id:'barrio',name:'Puta Madre',role:'Barrio Latino · dance and tequila',kind:'man',photo:PHOTO+'b74f4e09-a2a6-4487-9aad-9d2b959e98f3.jpg',actions:['bar'],custom:''};
const hristo = {id:'hristo',name:'Hristo',role:'Grenoble · a surprise appearance',kind:'man',photo:PHOTO+'hristo.jpg'};
const locations = ['PLACE GRE’NETTE','RUE DE BONNE','JARDIN DE VILLE','PLACE SAINT-ANDRÉ','QUAIS DE L’ISÈRE','BASTILLE VIEW','PLACE VICTOR HUGO','RUE DE STRASBOURG','PARC PAUL MISTRAL','OLD GRENOBLE'];
const $=s=>document.querySelector(s);
const el={scene:$('#scene'),canvas:$('#world'),sprite:$('#guestSprite'),spritePhoto:$('#spritePhoto'),location:$('#locationLabel'),progress:$('#progressBar'),progressLabel:$('#progressLabel'),toast:$('#sceneToast'),fx:$('#interactionFx'),intro:$('#introOverlay'),school:$('#schoolOverlay'),flight:$('#flightOverlay'),university:$('#universityOverlay'),schneider:$('#schneiderOverlay'),levelOverlay:$('#levelOverlay'),levelBadge:$('#levelBadge'),montage:$('#montageOverlay'),montageStage:$('#montageStage'),story:$('#storyOverlay'),storyPhoto:$('#storyPhoto'),movie:$('#movieOverlay'),video:$('#storyVideo'),movieSubtitles:$('#movieSubtitles'),encounter:$('#encounterOverlay'),birthdayShow:$('#birthdayShowOverlay'),birthdayShowTitle:$('#birthdayShowTitle'),birthdayShowText:$('#birthdayShowText'),ending:$('#endingOverlay'),endingPhoto:$('#endingPhoto'),endingPhotoPreview:$('#endingPhotoPreview'),menu:$('#menuOverlay'),actionGrid:$('#actionGrid'),guestList:$('#guestList'),actionScene:$('#actionScene'),actionStage:$('#actionStage'),stageGuestPhoto:$('#stageGuestPhoto'),stageGuestName:$('#stageGuestName'),stageEffects:$('#stageEffects'),stageShots:$('#stageShots'),barioPhoto:$('#barioPhoto'),barioVideo:$('#barioVideo')};
const movieCaptionCues=[
  [0,.65,"Let's go."],
  [.65,5,'Only on August 30 at 11 a.m. Moscow time,\njoin our webinar to discover'],
  [5,10,'Harmony push buttons and switches,'],
  [10,14,'potentiometers, USB connectors,\nand other Harmony devices'],
  [14,17,'for simple, effective equipment control.'],
  [17,20.9,'Be sure to join us!']
];
const ctx=el.canvas.getContext('2d'); ctx.imageSmoothingEnabled=false;
const universityImage=new Image();universityImage.src=PHOTO+'pleshka.jpg';
const schneiderImage=new Image();schneiderImage.src=PHOTO+'schneider_dvintsev.jpg';
let roster=loadRoster(), endingPhoto=loadEndingPhoto(), route=[], progress=0, encounterIndex=0, playing=false, inEncounter=false, ended=false, freeRoam=false, freeRoamLocation='GRENOBLE · ANYWHERE', menuOpen=false, walking=false, corridorWalk=false, corridorTarget='prince', look=0, soundOn=true, movieCaptionsOn=true, videoContinue=null, videoSceneId=0, lastTime=0, stepAccum=0, toastTimer, drunk=false, sequenceToken=0, level=1, levelContinue=null, storyContinue=null, storyCardId=0, marriedInMoscow=false, birthdayShowId=0, avatarIndex=0;
let audioCtx;
function loadRoster(){try{const saved=JSON.parse(localStorage.getItem('anastasiaQuestRoster'));if(Array.isArray(saved)){
  const guests=saved.map(sanitizeGuest).filter(g=>g&&!g.photo.endsWith('b74f4e09-a2a6-4487-9aad-9d2b959e98f3.jpg'));
  const version=localStorage.getItem('anastasiaQuestRosterVersion');
  if(version==='4')return guests;
  if(version==='3'){
    const rafa=guests.find(g=>g.id==='guest-19'||g.name.toLowerCase()==='rafa');
    if(rafa)rafa.actions=[...new Set(['scissors',...rafa.actions.filter(a=>a!=='caesar')])];
    const toni=guests.find(g=>g.id==='guest-1'||g.name.toLowerCase()==='nico');
    if(toni)toni.name='Toni';
    localStorage.setItem('anastasiaQuestRoster',JSON.stringify(guests));localStorage.setItem('anastasiaQuestRosterVersion','4');return guests;
  }
  const ordered=featuredSeed.map(seed=>{const found=guests.find(g=>g.id===seed.id||g.name.toLowerCase()===seed.name.toLowerCase());return {...(found||{role:'Friend',enabled:true}),...seed,photo:seed.photo||found?.photo||'',actions:[...featuredActions[seed.name]],custom:''}});
  const rest=guests.filter(g=>!ordered.some(f=>f.id===g.id||f.name.toLowerCase()===g.name.toLowerCase()));
  const migrated=[...ordered,...rest];localStorage.setItem('anastasiaQuestRoster',JSON.stringify(migrated));localStorage.setItem('anastasiaQuestRosterVersion','4');return migrated;
}}catch(e){}return structuredClone(defaults)}
function loadEndingPhoto(){try{return localStorage.getItem('anastasiaQuestEndingPhoto')||PHOTO+'all.jpeg'}catch(e){return PHOTO+'all.jpeg'}}
function saveEndingPhoto(){try{localStorage.setItem('anastasiaQuestEndingPhoto',endingPhoto)}catch(e){alert('This browser could not save the ending photo. Try a smaller image.')}}
function sanitizeGuest(g){if(!g||typeof g!=='object')return null;return {id:String(g.id||crypto.randomUUID()),name:String(g.name||'Mystery Guest').slice(0,80),role:String(g.role||'Friend').slice(0,80),kind:['woman','man','pet','group'].includes(g.kind)?g.kind:'group',photo:typeof g.photo==='string'?g.photo:'',enabled:g.enabled!==false,actions:Array.isArray(g.actions)?g.actions.filter(a=>actionInfo[a]):['hug','dance','toast'],custom:String(g.custom||'').slice(0,80)}}
function saveRoster(){try{localStorage.setItem('anastasiaQuestRoster',JSON.stringify(roster));localStorage.setItem('anastasiaQuestRosterVersion','4')}catch(e){alert('This browser could not save all photos. Try a smaller image or export your list.')}}
function makeRoute(){route=[university,schneider,toliki,kaiko,...roster.filter(g=>g.enabled).map(g=>({...g}))];route.splice(Math.min(9,route.length),0,barrio,hristo);progress=0;encounterIndex=0;ended=false;inEncounter=false;updateHUD();updateSprite()}
function locationAt(i){return freeRoam?freeRoamLocation:corridorWalk?'SCHNEIDER · CORRIDORS':route[i]?.id==='university'?'MOSCOW · PLESHKA':route[i]?.id==='schneider'?'MOSCOW · DVINTSEV':route[i]?.id==='barrio'?'BARRIO LATINO':route[i]?.id==='toliki'?'GRENOBLE · NEW FRIENDS':route[i]?.id==='kaiko'?'GRENOBLE · KAIKO':locations[Math.floor(Math.max(0,i-2)/2)%locations.length]}
function updateHUD(){const friends=Math.max(0,route.length-2),met=Math.min(Math.max(0,encounterIndex-2),friends),inMoscow=corridorWalk||['university','schneider'].includes(route[encounterIndex]?.id);el.location.textContent=locationAt(encounterIndex);el.progress.style.width=freeRoam?'100%':`${friends?met/friends*100:100}%`;el.progressLabel.textContent=freeRoam?'∞ FRIENDS':`${met} / ${friends} FRIENDS`;$('#statusLabel').textContent=inMoscow?'CHAPTER':'WINE LEVEL';$('#wineLevel').textContent=inMoscow?'MOSCOW':drunk?'TEQUILA x6 ★':'♥ ♥ ♥';el.levelBadge.textContent=`ANASTASIA · LVL ${String(level).padStart(2,'0')}`;el.levelBadge.setAttribute('aria-label',`Anastasia's current level: ${level}`);el.scene.classList.toggle('tipsy',drunk);el.scene.classList.toggle('moscow',inMoscow)}
function showToast(msg,ms=2000){el.toast.textContent=msg;el.toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.toast.classList.remove('show'),ms)}
function playTone(freq,duration=.12,type='square',vol=.045,when=0){if(!soundOn)return;try{audioCtx ||= new (window.AudioContext||window.webkitAudioContext)();audioCtx.resume();const o=audioCtx.createOscillator(),g=audioCtx.createGain();o.type=type;o.frequency.setValueAtTime(freq,audioCtx.currentTime+when);g.gain.setValueAtTime(vol,audioCtx.currentTime+when);g.gain.exponentialRampToValueAtTime(.001,audioCtx.currentTime+when+duration);o.connect(g).connect(audioCtx.destination);o.start(audioCtx.currentTime+when);o.stop(audioCtx.currentTime+when+duration)}catch(e){}}
function melody(notes){notes.forEach((n,i)=>playTone(n,.18,'square',.035,i*.13))}
function rotateAnastasiaAvatar(image){image.src=anastasiaAvatars[avatarIndex%anastasiaAvatars.length];avatarIndex++}
function playActionMusic(action){
  const tunes={
    hug:[392,523,659,784,659,523,784,1047],kiss:[523,659,784,1047,988,784,1047],
    dance:[330,392,494,392,330,494,587,494,392,523,659,523,392,494,784,659],bar:[294,440,587,440,330,494,659,494,349,523,698,523,392,587,784,587],
    sing:[392,440,523,587,659,587,523,784],serenade:[330,392,494,587,659,587,494,784],toast:[523,784,1047,784,1175,1047],
    scissors:[659,784,659,988,784,1175,988,1319],punch:[196,196,392,156,523],ignore:[440,392,349,330,294],
    pet:[523,587,659,784,659,587],treat:[523,659,784,988,784],boop:[784,1047,1319],
    joke:[392,523,392,659,523,784],selfie:[784,988,1175,1568],confetti:[523,659,784,988,1175,1319],spin:[392,494,587,698,784,988],compliment:[523,659,784,1047],highfive:[392,784,1175],
    threewine:[523,659,784,659,523,784,988],workevent:[330,392,494,587,784,988,784,1047],
    ontime:[784,392,784,392,988,523],venice:[349,440,523,659,587,523,440],sevenwine:[523,659,784,988,784,659,523],
    responsibilities:[262,330,392,523,659,784],snowboard:[392,494,587,784,988,1175],bardance:[330,494,659,494,392,587,784,587],gossip:[523,587,659,587,784,659]
  };
  const notes=tunes[action]||[523,659,784,1047];
  const repetitions=action==='bar'?2:1,beat=action==='bar'?.21:.22;
  for(let r=0;r<repetitions;r++)notes.forEach((n,i)=>{const at=(r*notes.length+i)*beat;playTone(n,beat*.82,action==='bar'?'triangle':'square',.038,at);if(action==='bar'&&i%2===0)playTone(i%4===0?98:147,.075,'triangle',.07,at)});
}
function fx(symbol){el.fx.textContent=symbol;el.fx.classList.remove('pop');void el.fx.offsetWidth;el.fx.classList.add('pop')}
function startGame(){sequenceToken++;birthdayShowId++;avatarIndex=0;anastasiaAvatars.forEach(src=>{const image=new Image();image.src=src});el.birthdayShow.classList.add('hidden');drunk=false;freeRoam=false;level=1;corridorWalk=false;corridorTarget='prince';levelContinue=null;storyContinue=null;videoContinue=null;marriedInMoscow=false;el.video.pause();el.barioVideo.pause();videoSceneId++;makeRoute();playing=true;inEncounter=true;walking=false;el.scene.classList.remove('walking');el.intro.classList.add('hidden');el.school.classList.remove('hidden');el.flight.classList.add('hidden');el.ending.classList.add('hidden');el.encounter.classList.add('hidden');el.university.classList.add('hidden');el.schneider.classList.add('hidden');el.levelOverlay.classList.add('hidden');el.montage.classList.add('hidden');el.story.classList.add('hidden');el.movie.classList.add('hidden');el.actionScene.classList.add('hidden');melody([392,494,587,784]);requestAnimationFrame(tick)}
function beginMoscowWalk(){el.school.classList.add('hidden');inEncounter=false;showToast('THE JOURNEY BEGINS',2200);melody([392,494,587,784])}
function nextDistance(){return encounterIndex*100+80-progress}
function updateSprite(){if(!playing||inEncounter||ended||menuOpen){el.sprite.style.display='none';return}const g=corridorWalk?{id:corridorTarget,name:corridorTarget==='olga'?'Olga':'Aleksey',kind:'person',photo:PHOTO+(corridorTarget==='olga'?'olga.JPG':'prince_2.JPG')}:route[encounterIndex],d=nextDistance();if(!g||(!corridorWalk&&['university','schneider'].includes(g.id))||d>72){el.sprite.style.display='none';return}el.sprite.style.display='flex';let scale=Math.max(.25,Math.min(1.5,1.5-d/58));el.sprite.style.transform=`translateX(calc(-50% + ${-look*22}px)) scale(${scale})`;el.sprite.querySelector('.sprite-name').textContent=g.name.toUpperCase();el.spritePhoto.src=g.photo||'';el.spritePhoto.alt=g.name;el.sprite.querySelector('.sprite-body').style.background=g.kind==='pet'?'#9c7a58':'#7d496b'}
function openEncounter(){
  if(inEncounter||ended)return;
  inEncounter=true;walking=false;el.scene.classList.remove('walking');
  const g=route[encounterIndex];el.sprite.style.display='none';
  if(corridorWalk){corridorWalk=false;(corridorTarget==='olga'?showOlgaStory:startPrinceStory)(sequenceToken);return}
  if(g.id==='university'){el.university.classList.remove('hidden');melody([392,523,659,784]);return}
  if(g.id==='schneider'){el.schneider.classList.remove('hidden');melody([392,494,587,784]);return}
  if(g.id==='toliki'){startTolikiStory(sequenceToken);return}
  if(g.id==='kaiko'){startKaikoStory(sequenceToken);return}
  if(g.id==='hristo'){startHristoStory(sequenceToken);return}
  el.encounter.classList.remove('hidden');
  $('#encounterPhoto').src=g.photo||'';$('#encounterPhoto').alt=g.name;
  $('#encounterName').textContent=g.name;$('#encounterRole').textContent=g.role.toUpperCase();
  $('#encounterCount').textContent=freeRoam?'∞':`${String(encounterIndex+1).padStart(2,'0')} / ${String(route.length).padStart(2,'0')}`;
  $('#encounterTag').textContent=g.id==='barrio'?'♫ BARRIO LATINO':'✦ YOU MET SOMEONE!';
  $('#encounterPrompt').textContent=g.id==='barrio'?'Puta Madre invites Anastasia onto the dance floor. Tequila is ready!':'What will Anastasia do?';
  $('#reaction').classList.add('hidden');el.actionGrid.innerHTML='';
  const acts=g.id==='barrio'?['bar']:[...new Set(g.actions||[])];
  for(const a of acts){const b=document.createElement('button');b.className='action-btn';b.dataset.action=a;b.textContent=a==='bar'?'🍹 DANCE & TAKE TEQUILA SHOTS':`${actionInfo[a]?.[0]||'✨'} ${actionInfo[a]?.[1]||a}`;el.actionGrid.append(b)}
  if(g.id!=='barrio'&&g.custom.trim()){const b=document.createElement('button');b.className='action-btn';b.dataset.action='custom';b.textContent='✨ '+g.custom.trim();el.actionGrid.append(b)}
  playTone(740,.11);playTone(990,.17,'square',.035,.11)
}
function showLevelUp(nextLevel,message,token,proceed){if(token!==sequenceToken)return;el.montage.classList.add('hidden');level=nextLevel;updateHUD();$('#levelNumber').textContent=`ANASTASIA · LEVEL ${String(level).padStart(2,'0')}`;$('#levelMessage').textContent=message;levelContinue=()=>{if(token!==sequenceToken)return;el.levelOverlay.classList.add('hidden');levelContinue=null;proceed(token)};el.levelOverlay.classList.remove('hidden');melody([523,659,784,1047,1319,1568])}
function finishUniversity(token){if(token!==sequenceToken)return;inEncounter=false;encounterIndex=1;progress=encounterIndex*100-10;updateHUD();showToast('MOSCOW · SCHNEIDER ELECTRIC AHEAD',2500);melody([392,494,587,784])}
function playFlightMusic(){const notes=[392,494,587,784,659,587,494,392,523,659,784,988,784,659,587,784,988,1175,988,784,1047,1319];notes.forEach((note,i)=>{playTone(note,.22,'triangle',.05,i*.19);if(i%4===0)playTone(note/2,.35,'sine',.025,i*.19)})}
function showFlight(token,together=true){if(token!==sequenceToken)return;$('#flightMessage').textContent=together?'In 2020, Anastasia and Aleksey move from Moscow to Grenoble. Their next adventure is about to begin!':'In 2020, Anastasia leaves Moscow for Grenoble. A new chapter is about to begin!';el.flight.classList.remove('hidden');playFlightMusic()}
function finishSchneider(token){if(token!==sequenceToken)return;inEncounter=false;encounterIndex=2;progress=encounterIndex*100-10;updateHUD();showToast('CHAPTER THREE · GRENOBLE',2500);melody([392,494,587,784])}
function beginCorridorWalk(token,target='prince'){if(token!==sequenceToken)return;el.montage.classList.add('hidden');corridorTarget=target;corridorWalk=true;inEncounter=false;walking=false;progress=encounterIndex*100-10;updateHUD();showToast(target==='olga'?'BACK IN THE SCHNEIDER CORRIDORS':'SCHNEIDER · FOLLOW THE CORRIDOR',3000);melody([330,392,494,587])}
function playMontage(beats,chapter,token,onDone){const showBeat=(beat,i)=>{if(token!==sequenceToken)return;rotateAnastasiaAvatar($('#montageAvatar'));el.montageStage.className=`montage-stage pixel-panel mode-${beat[0]}`;$('#montageChapter').textContent=chapter;$('#montageCounter').textContent=`${String(i+1).padStart(2,'0')} / ${String(beats.length).padStart(2,'0')}`;$('#montageTitle').textContent=beat[1];$('#montageMessage').textContent=beat[2];$('#montageProp').textContent=beat[3];document.querySelectorAll('.montage-decor span').forEach((symbol,j)=>symbol.textContent=beat[0]==='machine'?['⚙','✦','⚙'][j]:['♫','✦','★'][j]);if(beat[0]==='party'){melody([392,523,659,784,659,523]);playTone(98,.1,'triangle',.06)}else if(beat[0]==='machine'){melody([294,392,494,587,784,988]);[0,.24,.48,.72].forEach(at=>playTone(110,.08,'square',.027,at))}else if(beat[0]==='work'){melody([294,392,494,587]);playTone(208,.08,'square',.026)}else{melody([262,330,392,330]);playTone(180,.07,'triangle',.025)}};showBeat(beats[0],0);el.montage.classList.remove('hidden');beats.slice(1).forEach((beat,i)=>setTimeout(()=>showBeat(beat,i+1),(i+1)*1550));setTimeout(()=>onDone(token),beats.length*1550+250)}
function chooseUniversity(join){const token=++sequenceToken;el.university.classList.add('hidden');if(!join){showLevelUp(2,'Anastasia reaches Level 02. Another opportunity awaits.',token,finishUniversity);return}const beats=[
  ['party','PARTY!','The music starts. Anastasia owns the dance floor.','♫'],
  ['study','STUDY!','Books open. Notes pile up. She gets to work.','▣'],
  ['party','PARTY AGAIN!','One more night of dancing with friends.','♪'],
  ['study','STUDY AGAIN!','Back to lectures, coffee and late-night notes.','✎'],
  ['party','ONE MORE PARTY!','The dance floor calls her name again.','♫'],
  ['study','ONE MORE STUDY SESSION!','And she still finds time to learn it all.','▣']
];playMontage(beats,'MOSCOW · UNIVERSITY YEARS',token,()=>showLevelUp(2,'University complete! Anastasia reaches Level 02. A new opportunity awaits.',token,finishUniversity))}
function chooseSchneider(join){const token=++sequenceToken;el.schneider.classList.add('hidden');if(!join){showLevelUp(3,'The Moscow chapter ends. Grenoble is waiting!',token,t=>showFlight(t,false));return}beginCorridorWalk(token)}
function showStoryCard({photo,alt,eyebrow,title,text:body,button,stamp,autoAdvanceMs=0},token,next){if(token!==sequenceToken)return;el.montage.classList.add('hidden');el.movie.classList.add('hidden');el.story.classList.toggle('story-text-only',!photo);if(photo){el.storyPhoto.src=PHOTO+photo;el.storyPhoto.alt=alt}else{el.storyPhoto.removeAttribute('src');el.storyPhoto.alt=''};$('#storyEyebrow').textContent=eyebrow;$('#storyTitle').textContent=title;$('#storyText').textContent=body;$('#storyStamp').textContent=stamp||'MOSCOW · A NEW CHAPTER';$('#storyContinueBtn').textContent=button;$('#storyContinueBtn').classList.toggle('hidden',!!autoAdvanceMs);const cardId=++storyCardId;storyContinue=()=>{if(token!==sequenceToken||cardId!==storyCardId)return;storyContinue=null;next(token)};el.story.classList.remove('hidden');melody([392,523,659,784]);if(autoAdvanceMs)setTimeout(()=>{if(token===sequenceToken&&cardId===storyCardId&&!el.story.classList.contains('hidden'))storyContinue?.()},autoAdvanceMs)}
function startPrinceStory(token){showStoryCard({photo:'prince_2.JPG',alt:'Aleksey, the prince Anastasia meets',eyebrow:'✦ A FATEFUL MEETING ✦',title:'A BEAUTIFUL PRINCE',text:'Walking through the Schneider Electric corridors after work, Anastasia meets a beautiful prince named Aleksey.',button:'▶ WHO IS THIS PRINCE?',stamp:'MOSCOW · THEY MEET'},token,showProducerStory)}
function showProducerStory(token){showStoryCard({photo:'prince.jpg',alt:'Aleksey, the brilliant producer',eyebrow:'✦ THE PRINCE HAS A SECRET ✦',title:'A BRILLIANT PRODUCER',text:'Smart, handsome, and blessed with a perfect sense of humor, Aleksey had one more surprise: he was a brilliant producer. He introduced young Anastasia to the amazing world of Industrial Automation—where even robots were ready to follow her lead.',button:'▶ START THE MACHINES!',stamp:'ALEKSEY · THE PRODUCER'},token,showAutomationShow)}
function showAutomationShow(token){el.story.classList.add('hidden');playMontage([
  ['machine','PRESS START!','One tiny button, and Aleksey wakes up an entire factory.','⏻'],
  ['machine','ROBOT DANCE!','Conveyors roll. Robot arms wave. The machines may have better rhythm than the interns.','⚙'],
  ['party','STAR POWER!','Anastasia takes the controls. Suddenly the factory floor is a movie set—and she is the star.','★']
],'ALEKSEY PRESENTS · INDUSTRIAL AUTOMATION',token,t=>{if(t!==sequenceToken)return;el.montage.classList.add('hidden');showMovieStory(t)})}
function showOlgaStory(token){showStoryCard({photo:'olga.JPG',alt:'Olga outside Schneider Electric with a very green visitor',eyebrow:'✦ AN OFFER IN THE CORRIDOR ✦',title:'MEET OLGA!',text:'Olga has an idea for Anastasia: “Would you like to join the Home Distribution Channel team and lead e-commerce?” Anastasia says yes. A new team, a new challenge—and the unofficial office rhythm is about to begin: party, work, repeat!',button:'♥ ACCEPT OLGA’S OFFER',stamp:'MOSCOW · SCHNEIDER ELECTRIC'},token,t=>showSchneiderParty(t,1))}
function showSchneiderParty(token,round){showVideoScene({chapter:'★ SCHNEIDER DAYS · MOSCOW ★',byline:`PARTY ${round} / 3`,title:['','THE FIRST PARTY!','PARTY MODE: ON!','ONE MORE PARTY!'][round],source:`party${round}.mp4`,poster:'olga.JPG',playLabel:'▶ PLAY THE PARTY',withCaptions:false,advanceOnEnd:true,repeatCount:round===2?4:1,continueLabel:'▶ SKIP TO WORK'},token,t=>showSchneiderWork(t,round))}
function showSchneiderWork(token,round){const scenes=[null,
  {title:'WORK MODE: ON!',text:'After the first party, Anastasia and Olga are back with the team. There is always time for one more idea—and one more photo.',button:'▶ PARTY AGAIN!'},
  {title:'TEAMWORK LEVEL UP!',text:'The team grows, the smiles get bigger, and the workdays turn into stories they will remember.',button:'▶ KEEP THE PARTY GOING'},
  {title:'ONE MORE WORKDAY!',text:'Three parties and three workdays later, Anastasia has found more than an internship: she has found her people.',button:'♥ WHAT HAPPENS NEXT?'}
];const scene=scenes[round];showStoryCard({photo:`work${round}.jpeg`,alt:`Anastasia with friends and colleagues, work day ${round}`,eyebrow:`✦ SCHNEIDER · WORK ${round} / 3 ✦`,title:scene.title,text:scene.text,button:scene.button,stamp:`MOSCOW · WORK ${round} / 3`,autoAdvanceMs:4500},token,round<3?t=>showSchneiderParty(t,round+1):showLoveStory)}
function showLoveStory(token){showStoryCard({eyebrow:'✦ A LOVE STORY BEGINS ✦',title:'ANASTASIA & ALEKSEY',text:'Somewhere between work, laughter, and making a movie together, Anastasia and Aleksey fall in love. Their story grows into a life together—and in 2020, Moscow has a special surprise waiting for them.',button:'♥ WHAT HAPPENS NEXT?',stamp:'MOSCOW · 2020'},token,showMarriageStory)}
function showMarriageStory(token){showStoryCard({photo:'marriage.jpg',alt:'Anastasia and Aleksey together with their marriage certificate',eyebrow:'✦ MOSCOW · 2020 ✦',title:'JUST MARRIED!',text:'Anastasia and Aleksey celebrate their wedding in Moscow. A new adventure begins together.',button:'▶ GO TO THE NEXT CHAPTER',stamp:'MOSCOW · JUST MARRIED'},token,finishMarriageStory)}
function advanceGrenobleEncounter(token){if(token!==sequenceToken)return;el.story.classList.add('hidden');el.movie.classList.add('hidden');encounterIndex++;if(encounterIndex>=route.length){endGame();return}inEncounter=false;progress=encounterIndex*100-10;updateHUD();showToast('KEEP EXPLORING GRENOBLE',2400);melody([392,494,587,784])}
function startHristoStory(token){showStoryCard({photo:'hristo.jpg',alt:'Hristo in Grenoble',eyebrow:'✦ A SURPRISE ON THE STREET ✦',title:'MEET HRISTO!',text:'Anastasia spots Hristo in Grenoble. Before anyone can say hello, he has a story to show her...',button:'',stamp:'GRENOBLE · HRISTO',autoAdvanceMs:2800},token,showHristoVideo)}
function showHristoVideo(token){showVideoScene({chapter:'★ GRENOBLE · HRISTO ★',byline:'A SURPRISE APPEARANCE',title:'HRISTO TAKES THE SCREEN!',source:'hristo2_story.m4v',poster:'hristo.jpg',playLabel:'▶ PLAY HRISTO’S VIDEO',withCaptions:false,continueLabel:'▶ KEEP EXPLORING'},token,advanceGrenobleEncounter)}
function showRafaVideo(action,token){if(token!==sequenceToken)return;el.actionScene.classList.add('hidden');showVideoScene({chapter:'★ GRENOBLE · RAFA ★',byline:'ANASTASIA & RAFA',title:'ONE MORE RAFA MEMORY!',source:'rafa-video_story.m4v',poster:'rafa1_story.jpg',playLabel:'▶ PLAY RAFA’S VIDEO',withCaptions:false,continueLabel:'▶ KEEP EXPLORING'},token,t=>finishAction(action,t))}
function startTolikiStory(token){showStoryCard({photo:'toliki.jpg',alt:'Anastasia with Toliki and friends in the snow',eyebrow:'✦ NEW FRIENDS IN GRENOBLE ✦',title:'MEET TOLIKI!',text:'A new city brings wonderful new people. Anastasia and Aleksey meet Toliki, and an unforgettable friendship begins.',button:'♥ BECOME FRIENDS',stamp:'GRENOBLE · TOLIKI'},token,showTolikiFriendship)}
function showTolikiFriendship(token){showStoryCard({photo:'toliki.jpg',alt:'The friends spending time together',eyebrow:'✦ FRIENDSHIP UNLOCKED ✦',title:'FRIENDS & FILM NIGHTS',text:'Soon they are hanging out together, laughing and making memories. Anastasia’s fabulous career as a director and actress continues—and their next production is Friday Night.',button:'▶ WATCH FRIDAY NIGHT',stamp:'GRENOBLE · FRIENDS & FILMS'},token,showFridayVideo)}
function showFridayVideo(token){showVideoScene({chapter:'★ GRENOBLE FILM NIGHT ★',byline:'DIRECTED BY ANASTASIA',title:'FRIDAY NIGHT',source:'friday_night_story.m4v',poster:'toliki.jpg',help:'Press play for the next chapter of Anastasia’s film career.',playLabel:'▶ PLAY FRIDAY NIGHT',withCaptions:false},token,advanceGrenobleEncounter)}
function startKaikoStory(token){showStoryCard({photo:'kaiko.jpg',alt:'Kaiko as a small puppy',eyebrow:'✦ A NEW FAMILY MEMBER ✦',title:'MEET KAIKO!',text:'One day on a Grenoble walk, Anastasia decides it is time for a dog. Then she meets tiny Kaiko. Who could possibly say no to that face?',button:'🐾 REMEMBER PUPPY KAIKO',stamp:'GRENOBLE · KAIKO'},token,showKaikoPuppyStory)}
function showKaikoPuppyStory(token){showStoryCard({photo:'kaiko.jpg',alt:'Kaiko when he was an especially cute puppy',eyebrow:'✦ THE CUTE YEARS ✦',title:'SO SMALL. SO CUTE.',text:'When Kaiko was little, he was an unbelievably cute animal. Unlike now... when he knows exactly how cute he is and uses it to get away with everything!',button:'▶ WATCH KAIKO’S VIDEO',stamp:'KAIKO · PUPPY DAYS'},token,showKaikoVideo)}
function showKaikoVideo(token){showVideoScene({chapter:'★ THE KAIKO CHRONICLES ★',byline:'STARRING PUPPY KAIKO',title:'KAIKO: THE CUTE YEARS',source:'kaiko_story.m4v',poster:'kaiko.jpg',help:'Press play to meet the puppy who stole the show.',playLabel:'▶ PLAY KAIKO’S VIDEO',withCaptions:false},token,showAdultKaiko)}
function showAdultKaiko(token){showStoryCard({photo:'IMG_3482.jpeg',alt:'Kaiko all grown up in a hoodie',eyebrow:'✦ AND NOW... ✦',title:'KAIKO GREW UP!',text:'That tiny puppy became a hoodie-wearing expert at getting exactly what he wants. Still cute? He certainly thinks so.',button:'▶ KEEP WALKING',stamp:'GRENOBLE · KAIKO TODAY'},token,advanceGrenobleEncounter)}
function renderMovieCaptions(){const time=el.video.currentTime||0,cue=movieCaptionCues.find(([start,end])=>time>=start&&time<end);el.movieSubtitles.textContent=movieCaptionsOn&&cue&&(time>0||!el.video.paused)?cue[2]:''}
async function startStoryVideo(sceneId){const button=$('#moviePlayBtn');button.classList.add('hidden');if(el.video.ended)el.video.currentTime=0;el.video.muted=!soundOn;try{await el.video.play();if(sceneId!==videoSceneId||el.movie.classList.contains('hidden'))return;$('#movieHelp').textContent=movieCaptionsOn?'Playing with English subtitles.':'Playing now.';renderMovieCaptions();return}catch(e){}
  if(sceneId!==videoSceneId||el.movie.classList.contains('hidden'))return;
  if(soundOn){el.video.muted=true;try{await el.video.play();if(sceneId!==videoSceneId||el.movie.classList.contains('hidden'))return;button.dataset.mode='unmute';button.textContent='🔊 TURN ON SOUND';button.classList.remove('hidden');$('#movieHelp').textContent='Playing muted. Tap to turn on sound.';renderMovieCaptions();return}catch(e){}}
  if(sceneId!==videoSceneId||el.movie.classList.contains('hidden'))return;button.dataset.mode='play';button.textContent=button.dataset.playLabel;button.classList.remove('hidden');$('#movieHelp').textContent='Autoplay was blocked. Press Play to watch, or continue the story.'}
function showVideoScene({chapter,byline,title,source,poster,playLabel,withCaptions,advanceOnEnd=true,repeatCount=1,continueLabel='↷ CONTINUE STORY'},token,onDone){if(token!==sequenceToken)return;el.story.classList.add('hidden');el.video.pause();$('#movieChapter').textContent=chapter;$('#movieByline').textContent=byline;$('#movieTitle').textContent=title;$('#storyVideoSource').src=PHOTO+source;el.video.poster=PHOTO+poster;el.video.load();movieCaptionsOn=withCaptions;$('#movieCCBtn').classList.toggle('hidden',!withCaptions);$('#movieCCBtn').textContent='CC ON';$('#movieCCBtn').setAttribute('aria-pressed',String(withCaptions));$('#movieSkipBtn').textContent=continueLabel;Array.from(el.video.textTracks).forEach(track=>{track.mode='disabled'});el.movieSubtitles.textContent='';$('#movieHelp').textContent='Starting video…';const button=$('#moviePlayBtn');button.dataset.mode='play';button.dataset.playLabel=playLabel;button.textContent=playLabel;button.classList.add('hidden');el.video.dataset.storyToken=String(token);el.video.dataset.advanceOnEnd=String(advanceOnEnd);el.video.dataset.repeatCount=String(repeatCount);el.video.dataset.completedPlays='0';videoContinue=()=>onDone(token);el.movie.classList.remove('hidden');const sceneId=++videoSceneId;startStoryVideo(sceneId)}
function showMovieStory(token){showVideoScene({chapter:'★ THE MOSCOW MOVIE ★',byline:'STARRING ANASTASIA',title:'ANASTASIA BECOMES A MOVIE STAR!',source:'video_story.m4v',poster:'prince_2.JPG',playLabel:'▶ PLAY THE MOVIE',withCaptions:true},token,t=>beginCorridorWalk(t,'olga'))}
function handleVideoEnded(){const completed=Number(el.video.dataset.completedPlays||0)+1,total=Number(el.video.dataset.repeatCount||1);el.video.dataset.completedPlays=String(completed);if(completed<total){$('#movieHelp').textContent=`Party 2: play ${completed+1} of ${total}.`;el.video.currentTime=0;startStoryVideo(videoSceneId);return}if(el.video.dataset.advanceOnEnd==='true'){finishVideoStory();return}$('#movieHelp').textContent='Party clip complete. Replay it or head back to work.';const button=$('#moviePlayBtn');button.dataset.mode='play';button.textContent=button.dataset.playLabel;button.classList.remove('hidden')}
function finishVideoStory(){const token=Number(el.video.dataset.storyToken);if(token!==sequenceToken||el.movie.classList.contains('hidden'))return;el.video.pause();videoSceneId++;el.movie.classList.add('hidden');const next=videoContinue;videoContinue=null;next?.()}
function finishMarriageStory(token){if(token!==sequenceToken)return;marriedInMoscow=true;el.story.classList.add('hidden');showLevelUp(3,'Anastasia reaches Level 03. The Moscow story is complete. Grenoble awaits!',token,t=>showFlight(t,true))}
function showActionScene(action,g,message){
  const visual={
    hug:['🤗','🤗','♥ ♥ ♥'],kiss:['💋','💋','♥ ♥ ♥'],dance:['♪','♫','♪ ♫ ♪'],bar:['🍹','🍹','♫ ♪ ♫'],
    sing:['🎤','🎤','♪ ♫ ♪'],serenade:['🎤','♥','♪ ♥ ♪'],toast:['🥂','🥂','✦ CLINK! ✦'],highfive:['✋','✋','✦ POW! ✦'],
    joke:['😂','😂','HA HA HA!'],selfie:['📸','✌️','✦ FLASH! ✦'],confetti:['🎉','🎉','✦ ✦ ✦ ✦'],spin:['🌀','🌀','✦ ✦ ✦'],
    compliment:['✨','♥','YOU LOOK AMAZING!'],punch:['🥊','😵','✦ BONK! ✦'],ignore:['😎','?!','...'],scissors:['✌️','✌️','✌️ ✌️'],
    pet:['✋','🐾','♥ ♥ ♥'],treat:['🦴','🐾','YUM!'],boop:['👆','🐾','BOOP!'],custom:['✨','✨','✦ ✦ ✦'],
    threewine:['🍷','🍷','🍷 🍷 🍷'],workevent:['🎪','📋','BEST. EVENT. EVER!'],
    ontime:['⏰','🏃','9:01!'],venice:['🛶','🇮🇹','CIAO, VENEZIA!'],sevenwine:['🧀','🍷','🍷 🧀 🍷'],
    responsibilities:['📋','💨','YES, BOSS!'],snowboard:['🏂','🏂','❄ ❄ ❄'],bardance:['💃','🪩','♪ ♫ ♪'],gossip:['🤫','👂','SHHH...']
  }[action]||['✨','✨','✦ ✦ ✦'];
  rotateAnastasiaAvatar($('#actionAvatar'));
  el.actionStage.className=`action-stage pixel-panel mode-${action}${g.kind==='pet'?' pet-stage':''}`;
  el.stageGuestPhoto.src=action==='snowboard'?PHOTO+'kelly-snowboard.JPG':g.photo||'';el.stageGuestPhoto.alt=action==='snowboard'?'Kelly on the snowboard':g.name;el.stageGuestName.textContent=g.name.toUpperCase();
  el.actionStage.querySelector('.stage-actor.ana .actor-prop').textContent=visual[0];
  el.actionStage.querySelector('.stage-actor.guest .actor-prop').textContent=visual[1];
  el.stageEffects.textContent=visual[2];$('#actionSceneTitle').textContent=action==='bar'?'BARRIO LATINO!':(actionInfo[action]?.[1]||'BIRTHDAY MOMENT').toUpperCase()+'!';
  $('#actionSceneMessage').textContent=message;$('#stageNeon').textContent=action==='bar'?'★ BARRIO LATINO ★':action==='snowboard'?'★ THE SNOWY ALPS ★':action==='venice'?'★ VENICE ★':'✦ GRENOBLE ✦';
  el.stageShots.classList.toggle('hidden',action!=='bar');$('#shotCount').textContent='0 / 6';$('#shotIcons').textContent='▢ ▢ ▢ ▢ ▢ ▢';
  el.encounter.classList.add('hidden');el.actionScene.classList.remove('hidden');
}
function finishAction(action,token){if(token!==sequenceToken)return;el.barioVideo.pause();el.actionScene.classList.add('hidden');inEncounter=false;if(freeRoam){pickFreeRoamGuest();showToast('ANOTHER STORY AWAITS',2200);return}encounterIndex++;progress=encounterIndex*100-10;updateHUD();if(encounterIndex>=route.length){endGame();return}showToast(drunk&&action==='bar'?'SO MANY TEQUILA SHOTS...':`ONWARD TO ${locationAt(encounterIndex)}!`,2000)}
function playBarioClip(source){return new Promise(resolve=>{const video=el.barioVideo;let finished=false;const done=()=>{if(finished)return;finished=true;clearTimeout(watchdog);video.onended=null;video.onerror=null;resolve()};video.onended=done;video.onerror=done;video.src=PHOTO+source;video.load();video.muted=!soundOn;const watchdog=setTimeout(done,120000);video.play().catch(async()=>{video.muted=true;try{await video.play()}catch(e){setTimeout(done,3200)}})})}
async function playBarioShots(token){const media=['bario0.jpeg','bario1.MP4','bario2.mp4','bario3.mp4','bario4.jpeg','bario5-1.mp4'];const lines=['The night is young!','The dance floor is warming up!','Now everyone knows the chorus!','The room begins to spin...','One more photo for the album!','Anastasia is completely drunk!'];for(let i=0;i<media.length;i++){if(token!==sequenceToken)return;$('#shotCount').textContent=`${i+1} / 6`;$('#shotIcons').textContent=Array.from({length:6},(_,n)=>n<=i?'🥃':'▢').join(' ');$('#actionSceneMessage').textContent=`Shot ${i+1}! ${lines[i]}`;playTone(780+i*90,.15,'square',.07);const source=media[i];if(/\.jpe?g$/i.test(source)){el.barioVideo.pause();el.barioVideo.classList.add('hidden');el.barioPhoto.src=PHOTO+source;el.barioPhoto.classList.remove('hidden');await new Promise(resolve=>setTimeout(resolve,3000))}else{el.barioPhoto.classList.add('hidden');el.barioVideo.classList.remove('hidden');await playBarioClip(source)}if(i===5){drunk=true;el.actionStage.classList.add('very-tipsy');updateHUD()}}if(token===sequenceToken)setTimeout(()=>finishAction('bar',token),1100)}
function doAction(action){const g=route[encounterIndex];if(!g)return;[...el.actionGrid.children].forEach(b=>b.disabled=true);let message=actionInfo[action]?.[2]||`${g.name} and Anastasia have a great time!`;if(action==='punch'&&g.name==='Toni')message='A playful cartoon bonk! Toni sees stars, then asks if this means he is late again.';if(action==='custom')message=`${g.name} and Anastasia: ${g.custom}!`;if(action==='bar')message='Puta Madre and Anastasia dance under the neon lights!';const token=++sequenceToken;showActionScene(action,g,message);playActionMusic(action);if(action==='bar')playBarioShots(token);else setTimeout(()=>{if(g.id==='guest-19'||g.name.trim().toLowerCase()==='rafa')showRafaVideo(action,token);else finishAction(action,token)},3300)}
function playBirthdayMusic(){const notes=[392,392,440,392,523,494,392,392,440,392,587,523,392,392,784,659,523,494,440,698,698,659,523,587,523];const beats=[.55,.25,.8,.8,.8,1.55,.55,.25,.8,.8,.8,1.55,.55,.25,.8,.8,.8,.8,1.4,.55,.25,.8,.8,.8,1.6];let at=0;notes.forEach((note,i)=>{playTone(note,beats[i]*.8,'triangle',.065,at);playTone(note/2,beats[i]*.65,'sine',.025,at);at+=beats[i]*.44})}
function showBirthdayFinale(){const id=++birthdayShowId;el.birthdayShowTitle.textContent='A SPECIAL DAY AWAITS';el.birthdayShowText.textContent='Turn up the music. This one is for Anastasia!';el.birthdayShow.classList.remove('hidden');playBirthdayMusic();const phrases=[['HAPPY BIRTHDAY','THE WHOLE WORLD IS CELEBRATING!'],['ANASTASIA!','All the friends. All the adventures. All the joy.'],['MAKE A WISH ✦','Your next chapter is yours to create.']];phrases.forEach(([title,body],i)=>setTimeout(()=>{if(id!==birthdayShowId)return;el.birthdayShowTitle.textContent=title;el.birthdayShowText.textContent=body;el.birthdayShow.classList.remove('birthday-beat');void el.birthdayShow.offsetWidth;el.birthdayShow.classList.add('birthday-beat')},(i+1)*3600));setTimeout(()=>finishBirthdayFinale(id),14500)}
function finishBirthdayFinale(id=birthdayShowId){if(id!==birthdayShowId)return;birthdayShowId++;el.birthdayShow.classList.add('hidden');el.endingPhoto.src=endingPhoto;el.ending.classList.remove('hidden');melody([523,659,784,1047,988,1047,1319])}
function endGame(){playing=false;ended=true;inEncounter=true;updateHUD();showBirthdayFinale()}
function pickFreeRoamGuest(){const guests=roster.filter(g=>g.enabled);if(!guests.length){el.ending.classList.remove('hidden');playing=false;ended=true;return}let chosen=guests[Math.floor(Math.random()*guests.length)];if(guests.length>1&&chosen.id===route[0]?.id)chosen=guests[(guests.indexOf(chosen)+1)%guests.length];route=[{...chosen}];encounterIndex=0;progress=-10;freeRoamLocation=locations[Math.floor(Math.random()*locations.length)];updateHUD();updateSprite()}
function continueExploring(){freeRoam=true;playing=true;ended=false;inEncounter=false;el.ending.classList.add('hidden');pickFreeRoamGuest();showToast('THE NEXT CHAPTER IS YOURS',2600);melody([392,494,587,784]);requestAnimationFrame(tick)}
function rect(x,y,w,h,c){ctx.fillStyle=c;ctx.fillRect(Math.round(x),Math.round(y),Math.ceil(w),Math.ceil(h))}
function poly(points,c){ctx.fillStyle=c;ctx.beginPath();ctx.moveTo(points[0][0],points[0][1]);for(let i=1;i<points.length;i++)ctx.lineTo(points[i][0],points[i][1]);ctx.closePath();ctx.fill()}
function renderCorridor(t){const shift=Math.round(look*10),walk=Math.max(0,Math.min(90,progress-encounterIndex*100+10)),phase=(walk*3)%72;
  rect(0,0,384,216,'#d5ded8');poly([[0,0],[384,0],[241+shift,75],[143+shift,75]],'#e8eee8');poly([[0,0],[143+shift,75],[143+shift,145],[0,216]],'#8ba9a8');poly([[384,0],[241+shift,75],[241+shift,145],[384,216]],'#719a98');poly([[0,216],[143+shift,145],[241+shift,145],[384,216]],'#9faaa9');rect(143+shift,75,98,70,'#edf1e9');rect(143+shift,75,98,5,'#6e9996');
  for(let i=4;i>=0;i--){const near=((i*72+phase)%360)/360,depth=near*near,x=side=>192+shift+side*(50+depth*190),top=75-depth*78,bottom=145+depth*85;for(const side of [-1,1]){const edge=x(side),width=6+depth*34;rect(side<0?edge-width:edge,top,width,bottom-top,'#415d63');rect(side<0?edge-width+2:edge+2,top+4,width-4,bottom-top-8,'#bbd0cb');rect(side<0?edge-width+4:edge+4,top+8,width-8,5,'#e9f4df')}rect(186+shift-(depth*50),bottom-2,12+depth*100,2+depth*3,'#dce6da')}
  rect(176+shift,83,32,47,'#31464f');rect(180+shift,86,24,40,'#6c8a90');rect(198+shift,105,3,3,'#f2d48f');rect(155+shift,34,74,13,'#285c59');ctx.fillStyle='#d9fae7';ctx.font='bold 7px monospace';ctx.fillText('SCHNEIDER',169+shift,43);
  const bob=playing&&walking?Math.sin(t/95)*2:0;el.scene.style.transform=`translateY(${bob}px)`
}
function renderMoscow(t){const shift=Math.round(look*12),walk=Math.max(0,Math.min(80,progress-encounterIndex*100)),isSchneider=route[encounterIndex]?.id==='schneider';
  rect(0,0,384,216,'#9ac3df');rect(0,0,384,45,'#82afd2');rect(311,17,16,16,'#ffdc9a');
  for(let side of [-1,1])for(let i=0;i<4;i++){const near=i/4,x=side<0?-45+near*33:306+near*31,bw=77-near*18,bh=103-near*26,by=103;rect(x,by-bh,bw,bh,side<0?['#c7afa4','#d5b9a8','#bda69e','#d9c8b6'][i]:['#cbb6a9','#dfc6b1','#c1a8a0','#e0cdb9'][i]);rect(x,by-bh,bw,5,'#785f68');for(let row=0;row<4;row++)for(let col=0;col<3;col++){const wx=x+8+col*22,wy=by-bh+13+row*20;rect(wx,wy,8,10,'#627b91');rect(wx+1,wy+1,2,8,'#e9d4b0')}}
  rect(0,97,384,19,'#8a9b8d');poly([[143+shift,94],[241+shift,94],[384,216],[0,216]],'#d7c5b3');poly([[163+shift,95],[221+shift,95],[328,216],[56,216]],'#8d8d94');rect(189+shift,101,6,13,'#e9dbbc');rect(186+shift,148,11,27,'#e9dbbc');
  const width=isSchneider?57+walk*.45:130+walk*1.25,height=isSchneider?width*1.77:width/1.79,bottom=isSchneider?160:127+walk*.09,left=192-width/2+shift*.5,top=bottom-height,buildingImage=isSchneider?schneiderImage:universityImage;
  rect(left-4,top-4,width+8,height+8,isSchneider?'#3d746b':'#4e5265');if(buildingImage.complete&&buildingImage.naturalWidth)ctx.drawImage(buildingImage,Math.round(left),Math.round(top),Math.round(width),Math.round(height));else{rect(left,top,width,height,isSchneider?'#aec6c3':'#d3c5a9');for(let c=0;c<10;c++)rect(left+8+c*(width-16)/10,top+10,4,height-20,'#907e71')}
  rect(left-4,bottom+4,width+8,3,isSchneider?'#82d4b5':'#eed8b3');if(isSchneider){rect(146+shift,160,94,16,'#295e51');ctx.fillStyle='#e4ffed';ctx.font='bold 7px monospace';ctx.fillText('SCHNEIDER ELECTRIC',150+shift,171)}
  for(let side of [-1,1])for(let i=0;i<4;i++){const z=((i*54+walk*2)%220)/220,near=z*z,x=(side<0?138-near*136:246+near*136)+shift,y=102+near*86;rect(x,y-16-near*39,2+near*4,18+near*39,'#584d53');rect(x-6-near*20,y-27-near*43,15+near*40,13+near*26,'#5a9369');rect(x-3-near*15,y-33-near*45,9+near*29,10+near*21,'#6eae79')}
  rect(9,11,71,18,'#314e67');rect(12,14,65,12,'#e1ede7');ctx.fillStyle='#2b455b';ctx.font='bold 9px monospace';ctx.fillText('МОСКВА',18,23);
  rect(0,209,384,7,'#554b5c');const bob=playing&&walking?Math.sin(t/95)*2:0;el.scene.style.transform=`translateY(${bob}px)`
}
function render(t){if(corridorWalk){renderCorridor(t);return}if(['university','schneider'].includes(route[encounterIndex]?.id)){renderMoscow(t);return}const w=384,h=216,horizon=97,shift=Math.round(look*13+(drunk?Math.sin(t/340)*5:0)),phase=progress%100;rect(0,0,w,h,'#96bfd0');rect(0,0,w,41,'#7aa9c5');rect(295,15,17,17,'#ffe7a0');rect(301,11,6,5,'#ffe7a0');for(let i=0;i<5;i++){let x=i*100-38-shift*.25;poly([[x,85],[x+38,45+(i%2)*10],[x+93,85]],i%2?'#788da5':'#657f9b');poly([[x+24,58+(i%2)*10],[x+38,45+(i%2)*10],[x+51,59+(i%2)*10]],'#e4e2dc')}poly([[0,94],[62,73],[104,83],[169,71],[218,89],[285,75],[384,87],[384,108],[0,108]],'#4f797d');rect(0,95,384,20,'#86a797');
// A pixel street receding into Grenoble.
poly([[150+shift,93],[235+shift,93],[384,216],[0,216]],'#d9bd9f');poly([[157+shift,93],[227+shift,93],[316,216],[68,216]],'#b8a5a1');poly([[187+shift,93],[197+shift,93],[205,216],[178,216]],'#d4c6b1');for(let i=0;i<8;i++){let z=((i*26+phase*2)%205);let y=99+Math.pow(z/205,1.6)*130;let span=(y-95)*1.25;rect(192+shift-span/2,y,span,1+(y-95)/29,'#806f7e66');if(i%2===0)rect(191+shift,y,2+(y-95)/30,2+(y-95)/19,'#eee0b5')}
for(let side of [-1,1])for(let i=5;i>=0;i--){let z=((i*47+phase*1.6)%285)/285,near=Math.pow(z,1.6),edge=side<0?145+shift-near*155:239+shift+near*155,bw=12+near*80,bh=18+near*117,y=98-near*3;let x=side<0?edge-bw:edge;rect(x,y-bh,bw,bh,side<0?(i%2?'#d89c85':'#e5bda0'):(i%2?'#d6aa93':'#e6c4a1'));rect(x,y-bh,bw,4+near*7,'#915c6d');for(let col=0;col<3;col++)for(let row=0;row<3;row++){let wx=x+4+col*(bw-7)/3,wy=y-bh+9+row*(bh-9)/3;if(wx+4<x+bw-2&&wy+5<y-2){rect(wx,wy,3+near*7,4+near*10,'#62586a');rect(wx,wy,1+near*2,4+near*10,'#f2d793')}}if(near>.3){rect(x+(side<0?bw-5:2),y-bh-7,3,8,'#705264');rect(x+(side<0?bw-9:2),y-bh-9,10,3,'#705264')}}
// Plane trees and café details.
for(let side of [-1,1])for(let i=0;i<5;i++){let z=((i*61+phase*1.8+30)%320)/320,near=Math.pow(z,1.6),x=(side<0?141-near*151:243+near*151)+shift,y=95+near*101;rect(x,y-15-near*55,2+near*7,15+near*56,'#654e56');rect(x-7-near*24,y-22-near*59,16+near*49,11+near*37,i%2?'#4d896e':'#5c9772');rect(x-4-near*18,y-29-near*62,10+near*34,8+near*21,'#68a57c')}
if(route[encounterIndex]?.id==='barrio'){
  rect(249+shift,35,122,61,'#542654');rect(256+shift,42,108,42,'#2d193e');rect(252+shift,37,116,4,'#ff70b9');rect(257+shift,82,105,4,'#ff70b9');
  ctx.fillStyle='#ff9ed0';ctx.font='bold 10px monospace';ctx.fillText('BARRIO',266+shift,57);ctx.fillStyle='#ffe19a';ctx.fillText('LATINO  ♪',266+shift,73);
  rect(286+shift,86,37,35,'#ff9a65');rect(291+shift,91,27,30,'#281d42');
}
rect(0,207,384,9,'#755c70');rect(0,211,384,5,'#493749');const bob=playing&&walking?Math.sin(t/95)*2:0;const tilt=drunk?Math.sin(t/500)*1.1:0;el.scene.style.transform=`translateY(${bob}px) rotate(${tilt}deg)`}
function tick(t){if(!playing&& !menuOpen)return;const dt=Math.min(.05,(t-lastTime)/1000||0);lastTime=t;if(playing&&!inEncounter&&!menuOpen&&walking){progress+=dt*34;stepAccum+=dt;if(stepAccum>.24){playTone(110,.045,'triangle',.016);stepAccum=0}if(nextDistance()<=0){progress=encounterIndex*100+80;openEncounter()}}if(playing){render(t);updateSprite()}requestAnimationFrame(tick)}
function setWalking(on){walking=on&&playing&&!inEncounter&&!menuOpen;el.scene.classList.toggle('walking',walking)}
function openMenu(){menuOpen=true;setWalking(false);renderMenu();el.endingPhotoPreview.src=endingPhoto;el.menu.classList.remove('hidden')}
function closeMenu(){menuOpen=false;el.menu.classList.add('hidden');saveRoster();if(freeRoam){if(playing)pickFreeRoamGuest();return}if(playing){const old=encounterIndex;makeRoute();encounterIndex=Math.min(old,route.length-1);progress=encounterIndex*100-10;updateHUD()}}
function renderMenu(){el.guestList.innerHTML='';roster.forEach((g,i)=>{const row=document.createElement('div');row.className='guest-editor';row.dataset.index=i;row.innerHTML=`<label class="guest-thumb"><img alt=""><input class="photo-input" type="file" accept="image/*"></label><div class="guest-fields"><div class="guest-fields-top"><div class="field"><label>NAME</label><input data-field="name" maxlength="80"></div><div class="field"><label>ROLE / NOTE</label><input data-field="role" maxlength="80"></div><div class="field"><label>TYPE</label><select data-field="kind"><option value="woman">Woman / girl</option><option value="man">Man / boy</option><option value="pet">Pet</option><option value="group">Group / other</option></select></div></div><div class="guest-controls"><label class="enabled-label"><input type="checkbox" data-field="enabled"> Include in game</label><div class="guest-control-buttons"><button class="tiny-btn" data-move="up" title="Move up">↑</button><button class="tiny-btn" data-move="down" title="Move down">↓</button><button class="tiny-btn" data-delete title="Remove">✕</button></div></div><div class="actions-label">AVAILABLE INTERACTIONS</div><div class="action-options"></div><div class="field" style="margin-top:8px"><label>ONE CUSTOM INTERACTION (OPTIONAL)</label><input data-field="custom" maxlength="80" placeholder="e.g. Tell an inside joke"></div></div>`;row.querySelector('img').src=g.photo||'';row.querySelector('[data-field=name]').value=g.name;row.querySelector('[data-field=role]').value=g.role;row.querySelector('[data-field=kind]').value=g.kind;row.querySelector('[data-field=enabled]').checked=g.enabled;row.querySelector('[data-field=custom]').value=g.custom||'';const opts=row.querySelector('.action-options');Object.entries(actionInfo).forEach(([key,info])=>{const lab=document.createElement('label');lab.className='action-chip';const input=document.createElement('input');input.type='checkbox';input.dataset.action=key;input.checked=g.actions.includes(key);lab.append(input,document.createTextNode(' '+info[0]+' '+info[1]));opts.append(lab)});el.guestList.append(row)})}
function processPhoto(file,index){if(!file||!file.type.startsWith('image/'))return;const reader=new FileReader();reader.onload=()=>{const img=new Image();img.onload=()=>{const c=document.createElement('canvas'),max=480,scale=Math.min(1,max/Math.max(img.width,img.height));c.width=Math.round(img.width*scale);c.height=Math.round(img.height*scale);c.getContext('2d').drawImage(img,0,0,c.width,c.height);roster[index].photo=c.toDataURL('image/jpeg',.78);saveRoster();renderMenu()};img.src=reader.result};reader.readAsDataURL(file)}
function processEndingPhoto(file){if(!file||!file.type.startsWith('image/'))return;const reader=new FileReader();reader.onload=()=>{const img=new Image();img.onload=()=>{const c=document.createElement('canvas'),max=1280,scale=Math.min(1,max/Math.max(img.width,img.height));c.width=Math.round(img.width*scale);c.height=Math.round(img.height*scale);c.getContext('2d').drawImage(img,0,0,c.width,c.height);endingPhoto=c.toDataURL('image/jpeg',.82);saveEndingPhoto();el.endingPhoto.src=endingPhoto;el.endingPhotoPreview.src=endingPhoto};img.src=reader.result};reader.readAsDataURL(file)}
el.guestList.addEventListener('input',e=>{const row=e.target.closest('.guest-editor');if(!row)return;const i=Number(row.dataset.index),field=e.target.dataset.field;if(field){roster[i][field]=field==='enabled'?e.target.checked:e.target.value;saveRoster()}if(e.target.dataset.action){const a=e.target.dataset.action;roster[i].actions=e.target.checked?[...new Set([...roster[i].actions,a])]:roster[i].actions.filter(x=>x!==a);saveRoster()}});
el.guestList.addEventListener('change',e=>{if(e.target.classList.contains('photo-input'))processPhoto(e.target.files[0],Number(e.target.closest('.guest-editor').dataset.index))});
el.guestList.addEventListener('click',e=>{const row=e.target.closest('.guest-editor');if(!row)return;const i=Number(row.dataset.index);if(e.target.dataset.move){const j=i+(e.target.dataset.move==='up'?-1:1);if(j>=0&&j<roster.length){[roster[i],roster[j]]=[roster[j],roster[i]];saveRoster();renderMenu()}}if(e.target.hasAttribute('data-delete')){roster.splice(i,1);saveRoster();renderMenu()}});
$('#addGuestBtn').onclick=()=>{roster.push({id:crypto.randomUUID(),name:'New guest',role:'Friend',kind:'group',photo:'',enabled:true,actions:['hug','dance','toast'],custom:''});saveRoster();renderMenu();el.guestList.lastElementChild?.scrollIntoView({behavior:'smooth',block:'center'})};
$('#exportBtn').onclick=()=>{const blob=new Blob([JSON.stringify({version:2,guests:roster,endingPhoto},null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='anastasia-birthday-guest-list.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)};
$('#importInput').onchange=async e=>{const file=e.target.files[0];if(!file)return;try{const data=JSON.parse(await file.text());if(!Array.isArray(data.guests))throw new Error('No guest list found');roster=data.guests.map(sanitizeGuest).filter(g=>g&&!g.photo.endsWith('b74f4e09-a2a6-4487-9aad-9d2b959e98f3.jpg'));if(typeof data.endingPhoto==='string'&&data.endingPhoto.length<3000000){endingPhoto=data.endingPhoto;saveEndingPhoto();el.endingPhoto.src=endingPhoto;el.endingPhotoPreview.src=endingPhoto}saveRoster();renderMenu()}catch(err){alert('Could not import this guest list: '+err.message)}e.target.value=''};
$('#resetBtn').onclick=()=>{if(confirm('Reset the guest list to the original photos and interactions?')){roster=structuredClone(defaults);saveRoster();renderMenu()}};
$('#saveMenuBtn').onclick=closeMenu;$('#closeMenuBtn').onclick=closeMenu;$('#menuBtn').onclick=openMenu;$('#openMenuEnding').onclick=openMenu;
$('#endingPhotoInput').onchange=e=>{processEndingPhoto(e.target.files[0]);e.target.value=''};$('#resetEndingPhotoBtn').onclick=()=>{endingPhoto=PHOTO+'all.jpeg';saveEndingPhoto();el.endingPhoto.src=endingPhoto;el.endingPhotoPreview.src=endingPhoto};$('#exploreBtn').onclick=continueExploring;
$('#birthdayShowSkipBtn').onclick=()=>finishBirthdayFinale();
$('#soundBtn').onclick=()=>{soundOn=!soundOn;$('#soundBtn').textContent=soundOn?'♪ ON':'♪ OFF';el.video.muted=!soundOn;if(soundOn)playTone(660,.12)};
$('#startBtn').onclick=startGame;$('#playAgainBtn').onclick=startGame;$('#schoolContinueBtn').onclick=beginMoscowWalk;$('#flightContinueBtn').onclick=()=>{el.flight.classList.add('hidden');finishSchneider(sequenceToken)};
$('#joinUniversityBtn').onclick=()=>chooseUniversity(true);$('#skipUniversityBtn').onclick=()=>chooseUniversity(false);
$('#joinSchneiderBtn').onclick=()=>chooseSchneider(true);$('#skipSchneiderBtn').onclick=()=>chooseSchneider(false);$('#levelContinueBtn').onclick=()=>levelContinue?.();
$('#storyContinueBtn').onclick=()=>storyContinue?.();$('#moviePlayBtn').onclick=()=>{const button=$('#moviePlayBtn');if(button.dataset.mode==='unmute'){el.video.muted=false;button.classList.add('hidden');$('#movieHelp').textContent='Playing with sound.';return}startStoryVideo(videoSceneId)};$('#movieCCBtn').onclick=()=>{movieCaptionsOn=!movieCaptionsOn;$('#movieCCBtn').textContent=movieCaptionsOn?'CC ON':'CC OFF';$('#movieCCBtn').setAttribute('aria-pressed',String(movieCaptionsOn));renderMovieCaptions()};$('#movieSkipBtn').onclick=finishVideoStory;el.video.addEventListener('ended',handleVideoEnded);el.video.addEventListener('timeupdate',renderMovieCaptions);el.video.addEventListener('seeked',renderMovieCaptions);el.video.addEventListener('play',renderMovieCaptions);el.video.addEventListener('pause',renderMovieCaptions);el.video.addEventListener('error',()=>{$('#movieHelp').textContent='This browser cannot play the video. Continue the story.'});
el.actionGrid.addEventListener('click',e=>{const button=e.target.closest('button[data-action]');if(button&&!button.disabled)doAction(button.dataset.action)});
const walkBtn=$('#walkBtn');walkBtn.addEventListener('pointerdown',e=>{walkBtn.setPointerCapture(e.pointerId);setWalking(true)});walkBtn.addEventListener('pointerup',()=>setWalking(false));walkBtn.addEventListener('pointercancel',()=>setWalking(false));walkBtn.addEventListener('lostpointercapture',()=>setWalking(false));
window.addEventListener('keydown',e=>{if(['INPUT','SELECT','TEXTAREA'].includes(document.activeElement.tagName))return;if(['w','W','ArrowUp',' '].includes(e.key)){e.preventDefault();setWalking(true)}if(e.key==='a'||e.key==='A'||e.key==='ArrowLeft')look=Math.max(-2,look-.3);if(e.key==='d'||e.key==='D'||e.key==='ArrowRight')look=Math.min(2,look+.3);if(e.key==='Enter'&&playing&&!inEncounter&&!menuOpen&&nextDistance()<16)openEncounter();if(e.key==='Escape'&&menuOpen)closeMenu()});window.addEventListener('keyup',e=>{if(['w','W','ArrowUp',' '].includes(e.key))setWalking(false)});window.addEventListener('blur',()=>setWalking(false));
el.endingPhoto.src=endingPhoto;el.endingPhotoPreview.src=endingPhoto;makeRoute();render(0);showToast('A BIRTHDAY ADVENTURE AWAITS',3000);
})();
