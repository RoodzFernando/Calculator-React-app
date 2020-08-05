import React from 'react';
import Button from './Button';

export default function ButtonPanel(props) {
    return(
      <div className = "button-panel">
        <div className="group-1">
          <Button onClick = {props.clickHandler} color = "#E0E0E0" name = "AC"   />
          <Button onClick = {props.clickHandler} color = "#E0E0E0" name = "+/-"/>
          <Button onClick = {props.clickHandler} color = "#E0E0E0" name = "%"/>
          <Button onClick = {props.clickHandler} name = "÷"/>
        </div>
        <div className="group-2">
          <Button onClick = {props.clickHandler} color = "#E0E0E0" name = "7"/>
          <Button onClick = {props.clickHandler} color = "#E0E0E0" name = "8"/>
          <Button onClick = {props.clickHandler} color = "#E0E0E0" name = "9"/>
          <Button onClick = {props.clickHandler} name = "X"/>
        </div>
        <div className="group-3">
          <Button onClick = {props.clickHandler} color = "#E0E0E0" name = "4"/>
          <Button onClick = {props.clickHandler} color = "#E0E0E0" name = "5"/>
          <Button onClick = {props.clickHandler} color = "#E0E0E0" name = "6"/>
          <Button onClick = {props.clickHandler} name = "-"/>
        </div>
        <div className="group-4">
          <Button onClick = {props.clickHandler} color = "#E0E0E0" name = "1" />
          <Button onClick = {props.clickHandler} color = "#E0E0E0" name = "2" />
          <Button onClick = {props.clickHandler} color = "#E0E0E0" name = "3" />
          <Button onClick = {props.clickHandler} name = "+" />
        </div>
        <div className="group-5">
          <Button onClick = {props.clickHandler} color = "#E0E0E0" wide = {true} name = "0" />
          <Button onClick = {props.clickHandler} color = "#E0E0E0" name = "." />
          <Button onClick = {props.clickHandler} name = "=" />
        </div>
    </div>
  );
}
