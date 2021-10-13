-- Drop tables if exists
DROP TABLE IF EXISTS data_clean

-- Create data_clean table for raw dataset
CREATE TABLE data_clean (
	row_no SERIAL PRIMARY KEY,
	job_title VARCHAR,
	rating NUMERIC,
	company_name VARCHAR,
	us_city VARCHAR,
	us_state VARCHAR,
	sector VARCHAR,
	avg_salary NUMERIC,
	avg_size NUMERIC
)