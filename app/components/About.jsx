var React = require('react');

var About = (props) => {
    return (
       <div>
          <h1 className="text-center page-title">About</h1>
          <p>
            This is a Weather application using React. Was built for a 
            complete React Web app Developer course.
          </p>
          <p>
            Here are some of the tools that was used:
          </p>
          <ul>
            <li>
                <a href="https://facebook.github.io/react">React</a> - This was the 
                    JavaScript framework used.
            </li>
            <li>
                <a href="http://openweathermap.org">Open Weather Map</a> - Was used 
                    to search for weather data by city name.
            </li>
          </ul>
       </div>
    )
};

module.exports = About;
