import React from 'react';
import Button from './Button';

export default function ButtonPanel() {
    return(
      <div className = "button-panel">
        <div className="group-1">
          <Button color = "#E0E0E0" name = "AC"/>
          <Button color = "#E0E0E0" name = "+/-"/>
          <Button color = "#E0E0E0" name = "%"/>
          <Button name = "÷"/>
        </div>
        <div className="group-2">
          <Button color = "#E0E0E0" name = "7"/>
          <Button color = "#E0E0E0" name = "8"/>
          <Button color = "#E0E0E0" name = "9"/>
          <Button name = "X"/>
        </div>
        <div className="group-3">
          <Button color = "#E0E0E0" name = "4"/>
          <Button color = "#E0E0E0" name = "5"/>
          <Button color = "#E0E0E0" name = "6"/>
          <Button name = "-"/>
        </div>
        <div className="group-4">
          <Button color = "#E0E0E0" name = "1" />
          <Button color = "#E0E0E0" name = "2" />
          <Button color = "#E0E0E0" name = "3" />
          <Button name = "+" />
        </div>
        <div className="group-5">
          <Button color = "#E0E0E0" wide = {true} name = "0" />
          <Button color = "#E0E0E0" name = "." />
          <Button name = "=" />
        </div>
    </div>
  );
}
