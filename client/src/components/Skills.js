import React from "react"
import chroma from "chroma-js";
import Select from "react-select"


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const colorStyles = {
    control: (styles) => ({ ...styles, backgroundColor: 'rgba(0, 0, 0, 0.4)'}),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: isDisabled
          ? undefined
          : isSelected
          ? color
          : isFocused
          ? color.alpha(0.1).css()
          : undefined,
        color: isDisabled
          ? '#ccc'
          : isSelected
          ? chroma.contrast(color, 'white') > 2
            ? 'white'
            : 'black'
          : data.color,
        cursor: isDisabled ? 'not-allowed' : 'default',
  
        ':active': {
          ...styles[':active'],
          backgroundColor: !isDisabled
            ? isSelected
              ? data.color
              : color.alpha(0.3).css()
            : undefined,
        },
      };
    },
    multiValue: (styles, { data }) => {
      const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: color.alpha(0.1).css(),
      };
    },
    multiValueLabel: (styles, { data }) => ({
      ...styles,
      color: data.color,
    }),
    multiValueRemove: (styles, { data }) => ({
      ...styles,
      color: data.color,
      ':hover': {
        backgroundColor: data.color,
        color: 'white',
      },
    }),
  };

export const Skills = ({skills}) => {

    const options =  [
        { value: 'Python', label: 'Python', color: getRandomColor() },
        { value: 'SQL', label: 'SQL', color: getRandomColor() },
        { value: 'Javascript', label: 'Javascript', color: getRandomColor() },
        { value: 'Web', label: 'Web', color: getRandomColor() },
        { value: 'Mobile', label: 'Mobile', color: getRandomColor() },
        { value: 'Android', label: 'Android', color: getRandomColor() },
        { value: 'Java', label: 'Java', color: getRandomColor() }];

    const chosenOptions = options.filter(opt => skills.indexOf(opt.value) > -1);

    return (
            <Select 
                closeMenuOnSelect={false}
                isMulti
                styles={colorStyles}
                options={options}
                defaultValue={chosenOptions}
                placeholder='Select Your Skills'
                isSearchable={true}
                isDisabled
            />
    )
}