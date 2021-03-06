import React, { Component, useState } from "react";
import { CSVLink, CSVDownload } from "react-csv";

const DataExport = ({
  data,
  boardId,
  boardName,
  csv_data,
  Months,
  setNMonth,
}) => {
  return (
    <div>
      <div className="data-head">
        <div>
          <h2>
            BOARD NAME: {boardName} BOARD ID: {boardId}
          </h2>
        </div>

        <div>
          {data.message && <h2 style={{ color: "red" }}>{data.message}</h2>}
        </div>
      </div>

      {data.length > 0 && (
        <table className="table table-striped table-dark mt-5">
          <thead>
            <tr>
              <th>NO.</th>
              <th>DEVICE ID</th>
              <th>DEVICE NAME</th>
              <th>DEVICE TEMP</th>
              <th>DEVICE HUM</th>
              <th>PH</th>
              <th>PH TEMP</th>
              <th>EC</th>
              <th>EC TEMP</th>
              <th>WATER FLOW</th>
              <th>WATER TOTAL</th>
              <th>DATE</th>
              <th>TIME</th>
            </tr>
          </thead>

          {data.map((i, k) => {
            const tmpTime = i.time;
            const timeSplit = tmpTime.split(" ");
            const year = timeSplit[3];
            const time = timeSplit[4];
            const day = timeSplit[2];
            let tMonth = 0;
            let month = "";
            {
              /* console.log(i.time); */
            }
            for (let i = 0; i < Months.length; i++) {
              if (timeSplit[1] === Months[i]) {
                tMonth = i + 1;
              }
            }

            month = String(tMonth);
            setNMonth(tMonth);
            console.log(month.length);
            if (month.length == 1) {
              month = String(0) + String(tMonth);
            } else {
              month = String(tMonth);
            }

            return (
              <tbody key={i.device_id}>
                <tr>
                  <td>{k + 1}</td>
                  <td>{boardId}</td>
                  <td>{boardName}</td>
                  <td>{i.temperature}</td>
                  <td>{i.humidity}</td>
                  <td>{i.ph}</td>
                  <td>{i.phTemp}</td>
                  <td>{i.ec}</td>
                  <td>{i.ecTemp}</td>
                  <td>{i.waterFlow}</td>
                  <td>{i.waterTotal}</td>
                  <td>{`${year}-${month}-${day}`}</td>
                  <td>{time}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      )}
    </div>
  );
};

export default DataExport;
