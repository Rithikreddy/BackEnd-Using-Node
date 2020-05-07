//jshint esverion:6

exports.date = function(){    //we can use module.exports.date or exports.date
  let x = new Date();

  let options = {   //specifying the options for the date
    weekday:"long",
    day:"numeric",
    month:"long"
  };

  let y= x.toLocaleDateString("en-US",options);     //Be careful with spelling of Locale

  return y;
}

exports.day = getday(){       //we can use module.exports.day or exports.day
  let x = new Date();

  let options = {   //specifying the options for the date
    weekday:"long",
  };

  let y= x.toLocaleDateString("en-US",options);     //Be careful with spelling of Locale

  return y;
}
