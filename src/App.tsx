import { Fragment, lazy, Suspense, useLayoutEffect } from 'react';
import { Route, Routes } from 'react-router-dom'
import Loading from './Components/Utils/Loading/Loading';
import { RoutesLinks } from './Routes';
import Layout from './Layout/app/Layout';
import Auth from './Pages/Auth/Page';
import { useGetHomeSetting } from './api/setting';
import { setColor } from './Hooks/useColor';
// import { generateFingerprint } from './utils/generateUuid';

const Page404 = lazy(() => import("./Layout/app/NotFoundPage"))

const App = () => {

  const {data } = useGetHomeSetting()


useLayoutEffect(() => {
  if(data){
    setColor("--primary",data?.primary_color)
    setColor("--secondary",data?.secondary_color)
    setColor("--font-family",`${data?.font_family},sans-serif`)

  }

}, [data])


  return (
    <Routes >
      {/* 404 Page */}
      <Route path="*" element={<Suspense fallback={<Loading />}> <Page404 /></Suspense>} />
      
      {/* Login Page  */}

      <Route path="/auth" element={<Suspense fallback={<Loading />}> <Auth /></Suspense>} />      


      {/* All Routes */}
      {RoutesLinks?.map((item: any, index: number) => (

        <Fragment key={index}>


        if(item?.element){
            <Route  
            key={index}
          path={item.href}
           element={
          <Suspense fallback={<Loading />} >
            <Layout>  
              {item?.element ?? "Please Add Element Props in Routes"}
            </Layout>
           </Suspense>
           } 
            />
        }else{
          item?.children?.map((item:any)=>{
            return(
              <Route 
          path={item.href}
           element={
          <Suspense fallback={<Loading />} >
            <Layout>  
              {item?.element ?? "Please Add Element Props in Routes"}
            </Layout>
           </Suspense>
           } 
            />
            )
          })
          
        }
        
        </Fragment>

      ))
      }
    </Routes>



  )
}

export default App