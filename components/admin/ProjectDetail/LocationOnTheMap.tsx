const LocationOnTheMap =()=>{
    return(
        <div className="mt-4 border border-solid rounded-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.530475101017!2d105.59684152232977!3d21.091407092712373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134578f23c93a2b%3A0x8ca735f22ac7af97!2zUGjDuiBUaOG7i25oLCBOZ-G7jWMgVOG6o28sIFBow7pjIFRo4buNLCBIYW5vaSwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1699432334673!5m2!1sen!2s"
          className=" rounded-t-lg w-[100%] h-[400px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    )
}
export default LocationOnTheMap