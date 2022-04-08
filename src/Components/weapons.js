import React from 'react';

export function WeaponDisplay(weapon, classValue, textStyleClass, positionStyleClass ){
    return (
      <div className={textStyleClass + " weapon " + positionStyleClass}>
        {classValue === 0 /* Brute */ 
          ? <div>Trusted Weapon</div> 
          : <div>{weapon}</div>}
      </div>
    )
}

export default WeaponDisplay