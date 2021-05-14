import elements from '../../../templates/card.hbs';


const photoRef = document.querySelector('.image');
const preloader = document.querySelector('.preloader');
const hidePreloader = () => preloader.remove();

photoRef.onload = () => {
    console.log('hello');
}
  

const asyncImageLoader = imageRef => {
    return new Promise((resolve, reject) => {
        imageRef.onload = function () {
        resolve(imageRef);
        };
    
        imageRef.onerror = function (error) {
        reject(error);
        };
    });
    };

asyncImageLoader(photoRef).then(result => {
    return wait(2000)  
    }).then(res => {
    hidePreloader()
    })
    
const lazyLoading = imageRef => {
    const src = imageRef.dataset.src;
    imageRef.src = src;
    return asyncImageLoader(imageRef);
    };

lazyLoading(photoRef)
    .catch(error => console.log(error, '----error'))
    .then(result => {
        console.log(result, '---result');
        return wait(2000);
    })
    .finally(() => {
        hidePreloader();
});

const wait = delay => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        const a = 10;
        const b = 15;
        const result = a + b;
        resolve(result);
        }, delay);
    });
    };



