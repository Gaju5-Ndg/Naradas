import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  FormControl,
  MenuItem,
  Select,
} from "@material-ui/core";
import "./items.css";

// import ItemTable from "./itemTable";
import { NavLink } from "react-router-dom";

const Items = () => {
  
  const [selectedSensor, setSelectedSensor] = useState(1);

  const handleSensorChange = (event) => {
    setSelectedSensor(parseInt(event.target.value));
  };

  const getSensorTableData = () => {
    switch (selectedSensor) {
      case 1:
        return [
          {
            deviceId: 'ABC123',
            name: 'Marie Rose',
            tel: '078561',
            district: 'Nyarugenge',
            sector: 'Rwezamenyo',
            cell: 'Renzo',
            near: 'Chez Yubahwe',
            installationDate: '2021-01-30',
          },
          {
            deviceId: 'ABC100',
            name: 'Umuhoza',
            tel: '0786666',
            district: 'Muhanga',
            sector: 'Kinini',
            cell: 'Renzaho',
            near: 'Chez Pinkie',
            installationDate: '2021-01-30',
          },
          
        ];
      case 2:
        return [
          {
            deviceId: 'DEF456',
            name: 'Mujawimana',
            tel: '0789870',
            district: 'Kicukiro',
            sector: 'Niboy',
            cell: 'Niboy',
            near: 'Saint Joseph',
            installationDate: '2023-01-01',
          },
          {
            deviceId: 'DEF456',
            name: 'Angel',
            tel: '0789333',
            district: 'Kimironko',
            sector: 'Nayinzira',
            cell: 'Nayinzira',
            near: 'FourSquare',
            installationDate: '2023-01-01',
          },
          
        ];
      case 3:
        return [
          {
            deviceId: 'DEF459',
            name: 'Pink',
            tel: '0789870',
            district: 'Kicukiro',
            sector: 'Kiraro',
            cell: 'Kiraro',
            near: 'Saint Joseph',
            installationDate: '2023-01-01',
          },
          {
            deviceId: 'DEF457',
            name: 'Bidas',
            tel: '0789333',
            district: 'Kimironko',
            sector: 'NayinzI',
            cell: 'Nayinzi',
            near: 'KIE',
            installationDate: '2023-01-01',
          },
          
        ];
        break;
      case 4:
        return [
          {
            deviceId: 'DSE111',
            name: 'Kiri',
            tel: '0789870',
            district: 'Nyarugenge',
            sector: 'Biryogo',
            cell: 'Biryogo',
            near: 'Biryogo',
            installationDate: '2023-01-01',
          },
          {
            deviceId: 'DEF410',
            name: 'Nelly',
            tel: '0789344',
            district: 'Kimironko',
            sector: 'KIE',
            cell: 'KIE',
            near: 'Garre',
            installationDate: '2023-01-01',
          },
          
        ];
        break;
      case 5:
        return [
          {
            deviceId: 'DEF456',
            name: 'Mujawimana',
            tel: '0789870',
            district: 'Kicukiro',
            sector: 'Niboy',
            cell: 'Niboy',
            near: 'Saint Joseph',
            installationDate: '2023-01-01',
          },
          {
            deviceId: 'DEF456',
            name: 'Angel',
            tel: '0789333',
            district: 'Kimironko',
            sector: 'Nayinzira',
            cell: 'Nayinzira',
            near: 'FourSquare',
            installationDate: '2023-01-01',
          },
          
        ];
        break;
      case 6:
        return [
          {
            deviceId: 'DEF456',
            name: 'Mujawimana',
            tel: '0789870',
            district: 'Kicukiro',
            sector: 'Niboy',
            cell: 'Niboy',
            near: 'Saint Joseph',
            installationDate: '2023-01-01',
          },
          {
            deviceId: 'DEF456',
            name: 'Angel',
            tel: '0789333',
            district: 'Kimironko',
            sector: 'Nayinzira',
            cell: 'Nayinzira',
            near: 'FourSquare',
            installationDate: '2023-01-01',
          },
          
        ];
        break;
      default:
        return [];
    }
  };

  const sensorTableData = getSensorTableData();

  return (
    <div>
      <select value={selectedSensor} onChange={handleSensorChange}>
        <option value={1}>Sensor 1</option>
        <option value={2}>Sensor 2</option>
        <option value={3}>Sensor 3</option>
        <option value={4}>Sensor 4</option>
        <option value={5}>Sensor 5</option>
        <option value={6}>Sensor 6</option>
      </select>
      <table>
        <thead>
          <tr className="table-header">
            <th>Device ID</th>
            <th>Name</th>
            <th>Tel</th>
            <th>District</th>
            <th>Sector</th>
            <th>Cell</th>
            <th>Near</th>
            <th>Installation Date</th>
          </tr>
        </thead>
        <tbody>
          {sensorTableData.map((sensor, index) => (
            <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
              <td>{sensor.deviceId}</td>
              <td>{sensor.name}</td>
              <td>{sensor.tel}</td>
              <td>{sensor.district}</td>
              <td>{sensor.sector}</td>
              <td>{sensor.cell}</td>
              <td>{sensor.near}</td>
              <td>{sensor.installationDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Items;
