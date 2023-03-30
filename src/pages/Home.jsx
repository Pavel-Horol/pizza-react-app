import React, { useContext, useEffect, useState, useRef } from "react";
import Sort from "../components/Sort";
import Categories from "../components/Categories";
import MyLoader from "../components/preLoader";
import PizzaBlock from "../components/PizzaBlock";
import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router";
import PaginationComponent from "../components/Pagination/Pagination";
import { SearchContext } from "../App";
import { useDispatch, useSelector } from "react-redux";
import {
  setCategotyId,
  setCurrentPage,
  setFilters,
} from "../redux/slices/filterSlice";
import { setItems, fetchPizzas } from "../redux/slices/pizzasSlice";
import { listSort } from "../components/Sort";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = useRef(false);
  const isMounted = useRef(false);


  const { categoryId, sort, currentPage, searchValue } = useSelector(
    (state) => state.filter
  );

  const { items, status } = useSelector((state) => state.pizza);
  const sortType = sort.sortProperty;

  const onChangeCategory = (id) => {
    dispatch(setCategotyId(id));
  };

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  const getPizzas = async () => {
    const order = sortType.includes("-") ? "asc" : "desc";
    const sortBy = sortType.replace("-", "");
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `search=${searchValue}` : "";

    dispatch(
      fetchPizzas({
        sortBy,
        order,
        category,
        search,
        currentPage,
      })
    );
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    getPizzas();
  }, [categoryId, sortType, searchValue, currentPage]);
  // categoryId, sortType, searchValue, currentPage
  //   useEffect(() => {

  //     if(isMounted.current){
  //       const queryString = qs.stringify({
  //         sortProperty: sortType,
  //         categoryId,
  //         currentPage,
  //       });
  //       navigate(`?${queryString}`);
  //     }
  //     isMounted.current = true
  //   }, [categoryId, sortType, currentPage]);

  //   useEffect(() => {
  //     if (window.location.search) {
  //       const params = qs.parse(window.location.search.substring(1));

  //       const sort = listSort.find(
  //         (obj) => obj.sortProperty === params.sortProperty
  //       );

  //       dispatch(setFilters({ ...params, sort }));
  //       isSearch.current = true;
  //     }
  //   }, []);

  //   useEffect(() => {
  //     if (!isSearch.current) {
  //       fetchPizzas();
  //     }
  //     isSearch.current = false;

  // }, [categoryId, sortType, searchValue, currentPage]);

  const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(6)].map((_, index) => (
    <MyLoader key={index} />
  ));

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {status === "error" ? (
        <div className="content__error-info">
          <h2>Something went wrong😕</h2>
          <p>
            I dont know what went wrong or  i have 
            no money to resolve this error
          </p>
        </div>
      ) : (
        <div className="content__items">
          {status === "loading" ? skeletons : pizzas}
        </div>
      )}

      <PaginationComponent
        currentPage={currentPage}
        onChangePage={onChangePage}
      />
    </div>
  );
};

export default Home;
