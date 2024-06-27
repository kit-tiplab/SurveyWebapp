const GOOGLE_APPS_SCRIPT_WEBAPP_URL = 'YOUR URL HERE';
let sentences = [];
displaySentencePair();

function setContext(data) {
    document.getElementById('context-before-kana').innerHTML = '';
    document.getElementById('context-before-latn').innerHTML = '';
    document.getElementById('context-before-japn').innerHTML = '';
    document.getElementById('context-after-kana').innerHTML = '';
    document.getElementById('context-after-latn').innerHTML = '';
    document.getElementById('context-after-japn').innerHTML = '';
    
    document.getElementById('car-context-before-kana').innerHTML = '';
    document.getElementById('car-context-before-latn').innerHTML = '';
    document.getElementById('car-context-before-japn').innerHTML = '';
    document.getElementById('car-context-after-kana').innerHTML = '';
    document.getElementById('car-context-after-latn').innerHTML = '';
    document.getElementById('car-context-after-japn').innerHTML = '';
    
    for(let ii = 0; ii < data.contextKana.length; ii++) {
        if(ii < Math.floor(data.contextKana.length / 2)) {
            document.getElementById('context-before-kana').innerHTML += data.contextKana[ii] + '<br>\n';
            document.getElementById('context-before-latn').innerHTML += data.contextLatn[ii] + '<br>\n';
            document.getElementById('context-before-japn').innerHTML += data.contextJapn[ii] + '<br>\n';
            document.getElementById('car-context-before-kana').innerHTML += data.contextKana[ii] + '<br>\n';
            document.getElementById('car-context-before-latn').innerHTML += data.contextLatn[ii] + '<br>\n';
            document.getElementById('car-context-before-japn').innerHTML += data.contextJapn[ii] + '<br>\n';
        } else if(ii === Math.floor(data.contextKana.length / 2)) {
            document.getElementById('context-before-kana').innerHTML += '<span class="prompt">' + data.contextKana[ii] + '</span><br>\n';
            document.getElementById('context-before-japn').innerHTML += '<span class="prompt">' + data.contextJapn[ii] + '</span><br>\n';
            document.getElementById('car-context-before-kana').innerHTML += '<span class="prompt">' + data.contextKana[ii] + '</span><br>\n';
            document.getElementById('car-context-before-japn').innerHTML += '<span class="prompt">' + data.contextJapn[ii] + '</span><br>\n';
        } else {
            document.getElementById('context-after-kana').innerHTML += data.contextKana[ii] + '<br>\n';
            document.getElementById('context-after-latn').innerHTML += data.contextLatn[ii] + '<br>\n';
            document.getElementById('context-after-japn').innerHTML += data.contextJapn[ii] + '<br>\n';
            document.getElementById('car-context-after-kana').innerHTML += data.contextKana[ii] + '<br>\n';
            document.getElementById('car-context-after-latn').innerHTML += data.contextLatn[ii] + '<br>\n';
            document.getElementById('car-context-after-japn').innerHTML += data.contextJapn[ii] + '<br>\n';
        }
    }

    normalizeSlideHeights();
}

function displaySentencePair() {
    let displayAfterFetch = sentences.length === 0;
    document.getElementById('comment').value = '';
    
    if(sentences.length > 0) {
        displayNext();
    }
    if(sentences.length < 10) {
        fetchNewSentences(displayAfterFetch);
    }
}

function displayNext() {
    const data = sentences.pop();
    const diff = calculateDiff(data.human, data.model);
    const humanIndex = Math.floor(Math.random() * 2) + 1;
    const humanSentence = 'sentence' + humanIndex;
    const modelSentence = 'sentence' + (humanIndex === 1 ? 2 : 1);
    
    setContext(data);
    normalizeSlideHeights();
    
    document.getElementById(humanSentence).innerHTML = diff.sentence1;
    document.getElementById(modelSentence).innerHTML = diff.sentence2;
    
    document.getElementById(humanSentence).onclick = () => {
        sendDecision(true, false, document.getElementById('comment').value, data);
    };
    document.getElementById(modelSentence).onclick = () => {
        sendDecision(false, true, document.getElementById('comment').value, data);
    };
    document.getElementById('both').onclick = () => {
        sendDecision(true, true, document.getElementById('comment').value, data);
    };
    document.getElementById('neither').onclick = () => {
        sendDecision(false, false, document.getElementById('comment').value, data);
    };
}

function fetchNewSentences(displayOnFinish) {
    fetch(GOOGLE_APPS_SCRIPT_WEBAPP_URL, {
      redirect: "follow",
      headers: {
        "Content-Type": "text/plain",
      },
    })
    .then(response => response.json())
    .then(data => {
        if(data.success) {
            sentences = sentences.concat(data.sentences);
            if(displayOnFinish) {
                displayNext();
            }
        } else {
            console.log("Error");
        }
    })
    .catch(error => {
        data = {success: false};
        console.error('Error:', error);
    });
}

function calculateDiff(sentence1, sentence2) {
    const dmp = new diff_match_patch();
    const diffs = dmp.diff_main(sentence1, sentence2);
    dmp.diff_cleanupSemantic(diffs);

    let highlightedSentence1 = '';
    let highlightedSentence2 = '';

    diffs.forEach(diff => {
        type = diff[0];
        text = diff[1];
        if (type === 0) {
            highlightedSentence1 += text;
            highlightedSentence2 += text;
        } else if (type === -1) {
            highlightedSentence1 += `<span class="highlight">${text}</span>`;
        } else if (type === 1) {
            highlightedSentence2 += `<span class="highlight">${text}</span>`;
        }
    });

    return { sentence1: highlightedSentence1, sentence2: highlightedSentence2 };
}

function sendDecision(humanOK, modelOK, comment, sentence) {
    displaySentencePair();
    
    const data = {
        humanOK: humanOK,
        modelOK: modelOK,
        index: sentence.index,
        modelIndex: sentence.modelIndex,
        comment: comment,
    };
    
    fetch(GOOGLE_APPS_SCRIPT_WEBAPP_URL, {
      method: "POST",
      redirect: "follow",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "text/plain",
      },
    })
    .then(response => response.json())
    .then(respObj => {
        console.log(respObj);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function normalizeSlideHeights() {
    document.querySelectorAll('.carousel').forEach(function(carousel) {
        const items = carousel.querySelectorAll('.carousel-item');
        // reset the height
        items.forEach(function(item) {
            item.style.minHeight = '0';
        });

        // set the height
        const maxHeight = Array.from(items).reduce(function(max, item) {
            const wasActive = item.classList.contains('active');
            if (!wasActive) {
                item.classList.add('active');
            }

            const height = item.offsetHeight;

            if (!wasActive) {
                item.classList.remove('active');
            }

            return Math.max(max, height);
        }, 0);

        items.forEach(function(item) {
            item.style.minHeight = maxHeight + 'px';
        });
    });
}

(() => {
    const initCarousel = function(id) {
        return new bootstrap.Carousel(document.querySelector(`#${id}`), {
            interval: 50,
            touch: false,
        });
    };

    const linkFunctions = function(f1, f2) {
        return () => {
            setTimeout(f1, 0);
            f2();
        };
    };

    const carouselBefore = initCarousel('carousel-before');
    const carouselAfter  = initCarousel('carousel-after');

    carouselBefore.next = carouselBefore.next = linkFunctions(carouselBefore.next.bind(carouselBefore), carouselAfter.next.bind(carouselAfter));
    carouselBefore.prev = carouselBefore.prev = linkFunctions(carouselBefore.prev.bind(carouselBefore), carouselAfter.prev.bind(carouselAfter));
    carouselBefore.to = carouselBefore.to = linkFunctions(carouselBefore.to.bind(carouselBefore), carouselAfter.to.bind(carouselAfter));
})();

window.addEventListener('load', normalizeSlideHeights);
window.addEventListener('resize', normalizeSlideHeights);
window.addEventListener('orientationchange', normalizeSlideHeights);
