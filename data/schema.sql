-- Drop tables if exists
DROP TABLE IF EXISTS data_clean

-- Create data_clean table for raw dataset
CREATE TABLE data_clean (
	id SERIAL PRIMARY KEY,
	job_title VARCHAR,
	rating NUMERIC,
	company_name VARCHAR,
	us_state VARCHAR,
	sector VARCHAR,
	avg_salary NUMERIC,
	avg_size NUMERIC,
	company_founded NUMERIC,
	lat NUMERIC,
	lon NUMERIC,
	us_state_name VARCHAR
)