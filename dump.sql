--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: brands; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.brands (
    id integer NOT NULL,
    name text NOT NULL
);


--
-- Name: brands_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.brands_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: brands_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.brands_id_seq OWNED BY public.brands.id;


--
-- Name: products; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.products (
    id integer NOT NULL,
    name text NOT NULL,
    description text NOT NULL,
    typeid integer NOT NULL,
    brandid integer NOT NULL,
    stock integer,
    expirationdate timestamp without time zone
);


--
-- Name: products_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;


--
-- Name: producttype; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.producttype (
    id integer NOT NULL,
    name text NOT NULL
);


--
-- Name: producttype_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.producttype_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: producttype_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.producttype_id_seq OWNED BY public.producttype.id;


--
-- Name: brands id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.brands ALTER COLUMN id SET DEFAULT nextval('public.brands_id_seq'::regclass);


--
-- Name: products id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);


--
-- Name: producttype id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.producttype ALTER COLUMN id SET DEFAULT nextval('public.producttype_id_seq'::regclass);


--
-- Data for Name: brands; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.brands VALUES (1, 'Agilent');
INSERT INTO public.brands VALUES (2, 'ThermoFisher');
INSERT INTO public.brands VALUES (3, 'Einsten');


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.products VALUES (1, 'Centrífuga de placa', 'placa', 1, 1, 5, '2100-09-06 00:00:00');
INSERT INTO public.products VALUES (2, 'Centrífuga de tubo', 'placa', 1, 2, 5, '2100-09-06 00:00:00');
INSERT INTO public.products VALUES (3, 'Centrífuga refrigerada', 'refrigerada', 1, 3, 5, '2100-09-06 00:00:00');
INSERT INTO public.products VALUES (4, 'Enzima PCR', 'placa', 2, 1, 59, '2100-09-06 00:00:00');
INSERT INTO public.products VALUES (5, 'Tampão PCR', 'placa', 2, 1, 58, '2100-09-06 00:00:00');
INSERT INTO public.products VALUES (6, 'dNTP PCR', 'placa', 2, 3, 555, '2100-09-06 00:00:00');
INSERT INTO public.products VALUES (7, 'Tubo falcon', 'placa', 3, 2, 85, '2100-09-06 00:00:00');
INSERT INTO public.products VALUES (8, 'Pipeta pasteur', 'placa', 3, 1, 65, '2100-09-06 00:00:00');
INSERT INTO public.products VALUES (9, 'Eppendorf', 'placa', 3, 3, 145, '2100-09-06 00:00:00');
INSERT INTO public.products VALUES (10, 'Erlenmeyer', 'placa', 4, 3, 75, '2100-09-06 00:00:00');
INSERT INTO public.products VALUES (11, 'Proveta', 'placa', 4, 2, 50, '2100-09-06 00:00:00');
INSERT INTO public.products VALUES (12, 'Becker', 'placa', 4, 2, 100, '2100-09-06 00:00:00');


--
-- Data for Name: producttype; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.producttype VALUES (1, 'equipamentos');
INSERT INTO public.producttype VALUES (2, 'reagentes');
INSERT INTO public.producttype VALUES (3, 'plásticos');
INSERT INTO public.producttype VALUES (4, 'vidraria');


--
-- Name: brands_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.brands_id_seq', 3, true);


--
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.products_id_seq', 12, true);


--
-- Name: producttype_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.producttype_id_seq', 4, true);


--
-- Name: brands brands_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.brands
    ADD CONSTRAINT brands_name_key UNIQUE (name);


--
-- Name: brands brands_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.brands
    ADD CONSTRAINT brands_pkey PRIMARY KEY (id);


--
-- Name: products products_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_name_key UNIQUE (name);


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--
-- Name: producttype producttype_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.producttype
    ADD CONSTRAINT producttype_name_key UNIQUE (name);


--
-- Name: producttype producttype_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.producttype
    ADD CONSTRAINT producttype_pkey PRIMARY KEY (id);


--
-- Name: products products_brandid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_brandid_fkey FOREIGN KEY (brandid) REFERENCES public.brands(id);


--
-- Name: products products_typeid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_typeid_fkey FOREIGN KEY (typeid) REFERENCES public.producttype(id);


--
-- PostgreSQL database dump complete
--

