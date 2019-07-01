
const voiceDom = document.getElementById('voice');
const tweetTextareaDom = document.getElementById('tweet-textarea');

SpeechRecognition = webkitSpeechRecognition || SpeechRecognition;
const rec = new SpeechRecognition();

rec.lang = 'ja-JP';
rec.interimResults = true;
rec.continuous = true;

rec.onresult = e => {
  let tweetText = ''; 
  let voice = '';
  for (let i = event.resultIndex; i < event.results.length; i++) {
    const transcript = event.results[i][0].transcript;
    if (event.results[i].isFinal) {
      tweetText += transcript;
    } else {
      voice = transcript;
    }
  }

  voiceDom.innerHTML = voice;
  tweetTextareaDom.value += tweetText;
}

rec.start();
