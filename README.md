# lead-exposure-ny-zipcodes-tableau-wdc
This is a simple example of a Tableau Web Data Connector (WDC) for fetching data from a real API and displaying it in Tableau.<br>

## Childhood Blood Lead Testing and Elevated Incidence by Zip Code: Beginning 2000

This dataset contains the number and rate of children that reside in each New York State zip code, excluding New York City, who were tested for lead and identified for the first time within the specified time period to have elevated concentrations of lead in their blood. <br>
Under current NYS Public Health Law and implementing regulations, health care providers are required to test all children for lead at or around age one year and again at or around age two years. <br>
Health care providers are also required to assess all children age six months to 72 months of age at least once annually for lead exposure, with blood lead testing for all children found to be at risk, based on those assessments. <br>For more information,[check out:](http://www.health.ny.gov/environmental/lead/).<br>
table presents the dataset columns along with their API column names, data types, descriptions, and sample values
| Column Name           | API Column Name      | Data Type | Description                                                                                                                                         | Sample Values         |
|-----------------------|----------------------|-----------|-----------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------|
| County                | county               | text      | County of residence                                                                                                                                 | Suffolk               |
| County Code           | fips                 | number    | County FIPS code                                                                                                                                    | 103                   |
| Year                  | year                 | number    | Year the lead test was collected                                                                                                                    | 2019                  |
| Zip                   | zip                  | text      | Zip Code of residence                                                                                                                               | 12010                 |
| Tests                 | tests                | number    | Number of children who resided in the zip code and had a blood lead test within the specified year.                                                  | 1                     |
| Less than 5 mcg/dL   | less_than_5_mcg_dl  | number    | Number of children who resided in the zip code that were identified to have a unconfirmed and confirmed concentration of less than 5 micrograms per deciliter (mcg/dL) lead in their within the specified year. | 6                     |
| 5-10 mcg/dL          | _5_10_mcg_dl         | number    | Number of children who resided in the zip code that were identified to have a unconfirmed and confirmed concentration of lead in their blood between 5 – 10 micrograms per deciliter (mcg/dL) within the specified year.  | 0                     |
| 10 – 15 mcg/dL      | _10to15              | number    | Number of children who resided in the zip code that were identified for the first time to have a confirmed concentration of lead in their blood between 10 – 15 micrograms per deciliter (mcg/dL) within the specified year. | 0                     |
| 15 + mcg/dL          | _15                  | number    | Number of children who resided in the zip code that were identified for the first time to have a confirmed concentration of lead in blood greater than 15 micrograms per deciliter (mcg/dL) within the specified year.  | 0                     |
| Total Elevated Blood Levels | total_eblls | number    | Total number of children who resided in the zip code that were identified for the first time to have a confirmed elevated lead blood level within the specified year. Blood lead concentrations ≥ 10 mcg/dL are considered elevated. | 0                     |
| Percent               | percent              | number    | Total number of children who resided in the zip code that were identified for the first time with confirmed elevated lead blood levels within the specified year, divided by the total number of children who resided in the zip code that had a blood lead screening test in that same year multiplied by 100. | 0.0                   |
| Rate per 1,000       | rate_per_1_000       | number    | Total number of children who resided in the zip code that were identified for the first time with confirmed elevated lead blood levels within the specified year, divided by the total number of children who resided in the zip code that had a blood lead screening test in that same year multiplied by 1,000. | 0                     |
| Zip Code Location    | zip_code_location   | location  | Centroid location for zip code where child lives.                                                                                                    |                       |
| County Location      | county_location     | location  | Latitude and Longitude of New York State County's centroid                                                                                           |                       |


**Confirm prerequisites**<br>
You’re going to need a couple of things before we get started. Make sure you have the following dependencies installed:<br>
`Git`<br>
`node and npm`<br>
**Get the WDC SDK**<br>
Open a terminal in the directory where you want to download the WDC SDK.<br> Then run the following command to clone the WDC git repository:
```
git clone https://github.com/tableau/webdataconnector.git
```
Change to the directory where you downloaded the repository:<br>
```
cd webdataconnector
```
**To use this WDC:**
1. Run the simulator
Install dependencies with npm:
```
npm install --production
```
Note: You must run the command with administrator or sudo privileges.

2. Start the test web server:
```
npm start
```
## Usage

Open a browser and navigate to the following URL:

http://localhost:8888/Simulator/index.html

3. Add Connector URL <br>
Enter the URL of the Web Data Connector`../html\NYHealthData.html` or `../html\earthquakeUSGS.html`
4. Click the `Start Interactive Phase` button to display the user interface for the `NY Health Data WDC`.<br>
Click the Get NY Health Data! button.

Click the Fetch Table Data button to download the data and display it in a table.
3. Click the "Connect to Tableau" button.
4. In Tableau, go to Connect > To a Server > Web Data Connector.
5. Enter the URL of the Web Data Connector (usually `http://localhost:8888` if running locally).
Open a browser and navigate to the following URL:
http://localhost:8888/Simulator/index.html
6. Follow the prompts to connect and load data into Tableau.
