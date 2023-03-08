import { Routes, Route } from 'react-router-dom'
import { CommonLayout } from './CommonLayout'
import { Home } from '../pages/Home'
import { Post } from '../pages/Post'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<CommonLayout />}>
        <Route index element={<Home />} />
        <Route path="posts" element={<Post />} />
      </Route>
    </Routes>
  )
}
