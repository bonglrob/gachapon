function playAudio(sound: string) {
    const audio = new Audio(sound);
    audio.play();
  }

  export default playAudio;