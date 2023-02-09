import "./test.css"
import { useState } from "react"
import { Pg1 } from "./pg/pg1"
import { Pg2 } from "./pg/pg2"
import { Pg3 } from "./pg/pg3"
import { Pg4 } from "./pg/pg4"
import { Pg6 } from "./pg/pg6"
import { Pg5 } from "./pg/pg5"

export const Test = () => {

    //useState
    const [page, setPage] = useState(1)

    return(
        <div>
            <div>
            {
                page === 1 ? <Pg1/> : page === 2 ? <Pg2/> : page === 3 ? <Pg3/> : page === 4 ? <Pg4/> : page === 5 ? <Pg5/> : <Pg6/>
            }
            </div>
            <p>page {page} / 6</p>
            <center>
                {
                    page > 1 && (
                        <button
                        className="b1"
                        onClick={() => {
                            const nextPage = page - 1;
                            setPage(nextPage)
                        }}>
                        <b>Back</b>
                        </button>
                    )
                }
                {
                    page < 6 && (
                        <button
                        className="b1"
                        onClick={() => {
                            const nextPage = page + 1;
                            setPage(nextPage)
                        }}>
                        <b>Next</b>
                        </button>
                    )
                }
            </center>
        </div>
    )
}