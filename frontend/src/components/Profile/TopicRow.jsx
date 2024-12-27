import TopicRowRow from "./TopicRowRow"

const TopicRow = () => {
    return (
        <>
            <div className="w-full  flex flex-col items-center justify-center">
                < TopicRowRow title={'String'} para={'ladsfh asdbashb sdbahb'} num={'01'} />
                < TopicRowRow title={'Array'} para={'ladsfh asdbashb sdbahb'} num={'02'} />
                < TopicRowRow title={'List'} para={'ladsfh asdbashb sdbahb'} num={'03'} />
                < TopicRowRow title={'stack'} para={'ladsfh asdbashb sdbahb'} num={'04'} />
            </div>
        </>
    )
}
export default TopicRow