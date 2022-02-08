import { SchoolSharp } from '@mui/icons-material';
import React from 'react';

const Education = (props) => {
    
    return (
        <div className='education'>
            {SchoolSharp.map((school) => (
                <div>
                    <EducationItem
                        id={school.id}
                        name={school.name}
                        location={school.location}
                        degree={school.degree}
                        gps={school.gpa}
                        courses={school.courses}
                    />
                </div>    
            ))}
        </div>
    )
}

export default Education;
