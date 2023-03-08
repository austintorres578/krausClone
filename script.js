let currentSlide=1

let imageSlider = document.querySelector(".image-slider")
let quoteText = document.querySelector(".quote-text")
let quoteAuthor = document.querySelector(".quote-author")

let buttonOne = document.querySelector(".button-one")
let buttonTwo = document.querySelector(".button-two")
let buttonThree = document.querySelector(".button-three")
let buttonFour = document.querySelector(".button-four")
let buttonFive = document.querySelector(".button-five")
let buttonSix = document.querySelector(".button-six")


buttonOne.addEventListener("click",(event)=>{
    imageSlider.style.background="linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(images/bernards-testimonial.webp)"
    imageSlider.style.backgroundSize="cover"

    buttonOne.style.backgroundColor="white"
    buttonTwo.style.backgroundColor="rgba(0, 0, 0, 0)"
    buttonThree.style.backgroundColor="rgba(0, 0, 0, 0)"
    buttonFour.style.backgroundColor="rgba(0, 0, 0, 0)"
    buttonFive.style.backgroundColor="rgba(0, 0, 0, 0)"
    buttonSix.style.backgroundColor="rgba(0, 0, 0, 0)"

    quoteText.innerHTML="We could not have been happier with the work Kraus did on our logo project. They were enthusiastic, responsive, and incredibly professional. From start to finish, they were a pleasure to work with and the end result was ideal. I would recommend them highly for any looking for a custom logo."
    quoteAuthor.innerHTML="BERNARDS HS"

})
buttonTwo.addEventListener("click",(event)=>{
    imageSlider.style.background="linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(images/arcorporate-identity-mockup.webp)"
    imageSlider.style.backgroundSize="cover"

    buttonOne.style.backgroundColor="rgba(0, 0, 0, 0)"
    buttonTwo.style.backgroundColor="white"
    buttonThree.style.backgroundColor="rgba(0, 0, 0, 0)"
    buttonFour.style.backgroundColor="rgba(0, 0, 0, 0)"
    buttonFive.style.backgroundColor="rgba(0, 0, 0, 0)"
    buttonSix.style.backgroundColor="rgba(0, 0, 0, 0)"

    quoteText.innerHTML="Kraus does a very good job for our company building and maintaining our web and social presence. I have to commend the Digital team for doing a fantastic job on our social content and execution. They are always able to help and never afraid of a new request."
    quoteAuthor.innerHTML="AR MANAGEMENT COMPANY"
})
buttonThree.addEventListener("click",(event)=>{
    imageSlider.style.background="linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(images/tayloredservices-testimonial.webp)"
    imageSlider.style.backgroundSize="cover"

    buttonOne.style.backgroundColor="rgba(0, 0, 0, 0)"
    buttonTwo.style.backgroundColor="rgba(0, 0, 0, 0)"
    buttonThree.style.backgroundColor="white"
    buttonFour.style.backgroundColor="rgba(0, 0, 0, 0)"
    buttonFive.style.backgroundColor="rgba(0, 0, 0, 0)"
    buttonSix.style.backgroundColor="rgba(0, 0, 0, 0)"

    quoteText.innerHTML="Kraus has been working with us on our Marketing efforts in areas ranging from Branding to SEO. The Kraus team has helped us boost our presence on the internet and within our industry beyond our expectations. The team is knowledgable, professional and has assimilated very well with our culture. Kraus continues to exceed our expectations!"
    quoteAuthor.innerHTML="TAYLORED SERVICES"
})
buttonFour.addEventListener("click",(event)=>{
    imageSlider.style.background="linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(images/sprayfinishes-testimonial.webp)"
    imageSlider.style.backgroundSize="cover"

    buttonOne.style.backgroundColor="rgba(0, 0, 0, 0)"
    buttonTwo.style.backgroundColor="rgba(0, 0, 0, 0)"
    buttonThree.style.backgroundColor="rgba(0, 0, 0, 0)"
    buttonFour.style.backgroundColor="white"
    buttonFive.style.backgroundColor="rgba(0, 0, 0, 0)"
    buttonSix.style.backgroundColor="rgba(0, 0, 0, 0)"

    quoteText.innerHTML="We interviewed 12 other companies before choosing Kraus Marketing, and we definitely made the right decision. They helped us rename, rebrand, and rebuild our website. We then used them for digital marketing services, including SEO and social media. We never received a lead through our website before working with them, but we already received OVER A DOZEN LEADS and closed business in just month 3. We would highly recommend them for all marketing services."
    quoteAuthor.innerHTML="SPRAY FINISHES"
})
buttonFive.addEventListener("click",(event)=>{
    imageSlider.style.background="linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(images/Kyocera_Portfolio.webp)"
    imageSlider.style.backgroundSize="cover"


    buttonOne.style.backgroundColor="rgba(0, 0, 0, 0)"
    buttonTwo.style.backgroundColor="rgba(0, 0, 0, 0)"
    buttonThree.style.backgroundColor="rgba(0, 0, 0, 0)"
    buttonFour.style.backgroundColor="rgba(0, 0, 0, 0)"
    buttonFive.style.backgroundColor="white"
    buttonSix.style.backgroundColor="rgba(0, 0, 0, 0)"

    quoteText.innerHTML="Clear, Constant, Professional results.";
    quoteAuthor.innerHTML="KYOCERA"
})
buttonSix.addEventListener("click",(event)=>{
    imageSlider.style.background="linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(images/cranbury-testimonial.webp)"
    imageSlider.style.backgroundSize="cover"


    buttonOne.style.backgroundColor="rgba(0, 0, 0, 0)"
    buttonTwo.style.backgroundColor="rgba(0, 0, 0, 0)"
    buttonThree.style.backgroundColor="rgba(0, 0, 0, 0)"
    buttonFour.style.backgroundColor="rgba(0, 0, 0, 0)"
    buttonFive.style.backgroundColor="rgba(0, 0, 0, 0)"
    buttonSix.style.backgroundColor="white"

    quoteText.innerHTML="Kraus Marketing was a pleasure to work with and always went the extra mile. They continued to help with website tweaks even after we launched. They were always very responsive and positive.";
    quoteAuthor.innerHTML="CRANBURY FIELDS"
})

let tranOne = document.querySelector(".tran-one")
let tranTwo = document.querySelector(".tran-two")
let tranThree = document.querySelector(".tran-three")
let tranFour = document.querySelector(".tran-four")
let tranCon = document.querySelector(".transition-image-buttons")


tranOne.addEventListener("mouseenter",(event)=>{
    tranOne.style.background="linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))"
    tranCon.style.background="url(images/kaleidico-6YwkNenlDkI-unsplash-1-1170x658.webp)"
    tranCon.style.backgroundSize="cover"
    tranCon.style.backgroundRepeat="no-repeat"
    tranCon.style.backgroundPosition="bottom"
})
tranOne.addEventListener("mouseleave",(event)=>{
    tranOne.style.background="linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))"
    tranCon.style.background="url(images/kaleidico-6YwkNenlDkI-unsplash-1-1170x658.webp)"
    tranCon.style.backgroundSize="cover"
    tranCon.style.backgroundRepeat="no-repeat"
    tranCon.style.backgroundPosition="bottom"
})
tranTwo.addEventListener("mouseenter",(event)=>{
    tranTwo.style.background="linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))"
    tranCon.style.background="url(images/campaign-creators-s2ZliJLKS7c-unsplash-1170x658.webp)"
    tranCon.style.backgroundSize="cover"
    tranCon.style.backgroundRepeat="no-repeat"
    tranCon.style.backgroundPosition="middle"
})
tranTwo.addEventListener("mouseleave",(event)=>{
    tranTwo.style.background="linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))"
    tranCon.style.background="url(images/campaign-creators-s2ZliJLKS7c-unsplash-1170x658.webp)"
    tranCon.style.backgroundSize="cover"
    tranCon.style.backgroundRepeat="no-repeat"
    tranCon.style.backgroundPosition="middle"
})
tranThree.addEventListener("mouseenter",(event)=>{
    tranThree.style.background="linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))"
    tranCon.style.background="url(images/mantas-hesthaven-_g1WdcKcV3w-unsplash-1170x658.webp)"
    tranCon.style.backgroundSize="cover"
    tranCon.style.backgroundRepeat="no-repeat"
    tranCon.style.backgroundPosition="middle"
})
tranThree.addEventListener("mouseleave",(event)=>{
    tranThree.style.background="linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))"
    tranCon.style.background="url(images/mantas-hesthaven-_g1WdcKcV3w-unsplash-1170x658.webp)"
    tranCon.style.backgroundSize="cover"
    tranCon.style.backgroundRepeat="no-repeat"
    tranCon.style.backgroundPosition="middle"
})
tranFour.addEventListener("mouseenter",(event)=>{
    tranFour.style.background="linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))"
    tranCon.style.background="url(images/oleg-magni-E7FYfLSy9KM-unsplash-1170x658.webp)"
    tranCon.style.backgroundSize="cover"
    tranCon.style.backgroundRepeat="no-repeat"
    tranCon.style.backgroundPosition="bottom"
})
tranFour.addEventListener("mouseleave",(event)=>{
    tranFour.style.background="linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))"
    tranCon.style.background="url(images/oleg-magni-E7FYfLSy9KM-unsplash-1170x658.webp)"
    tranCon.style.backgroundSize="cover"
    tranCon.style.backgroundRepeat="no-repeat"
    tranCon.style.backgroundPosition="bottom"
})
