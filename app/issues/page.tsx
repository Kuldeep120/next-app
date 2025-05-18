
'use client'
import { Button } from "@radix-ui/themes"
import React from 'react'
import Link from "next/link"

const IssuesPage = () => {
  return (
    // <div><Link href="/issues/new">New Issue </Link></div>
    <div><Button><Link href="/issues/new">New Issue </Link></Button></div>
  )
}

export default IssuesPage